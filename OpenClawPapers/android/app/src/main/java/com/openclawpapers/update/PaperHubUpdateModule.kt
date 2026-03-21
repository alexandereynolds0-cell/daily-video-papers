package com.openclawpapers.update

import android.app.DownloadManager
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.net.Uri
import android.os.Build
import android.os.Environment
import android.provider.Settings
import androidx.core.content.FileProvider
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.io.File

class PaperHubUpdateModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

  private var downloadReceiver: BroadcastReceiver? = null
  private var activeDownloadId: Long? = null

  override fun getName(): String = "PaperHubUpdate"

  @ReactMethod
  fun downloadLatestApk(downloadUrl: String, promise: Promise) {
    if (downloadUrl.isBlank()) {
      promise.reject("INVALID_URL", "Download URL is empty.")
      return
    }

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O && !reactContext.packageManager.canRequestPackageInstalls()) {
      val settingsIntent = Intent(
        Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES,
        Uri.parse("package:${reactContext.packageName}"),
      ).apply {
        addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
      }
      reactContext.startActivity(settingsIntent)
      promise.reject("INSTALL_PERMISSION_REQUIRED", "Please allow installs from this app and try again.")
      return
    }

    val downloadManager = reactContext.getSystemService(Context.DOWNLOAD_SERVICE) as DownloadManager
    val fileName = "PaperHub-update.apk"
    val destinationFile = File(
      reactContext.getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS),
      fileName,
    )
    if (destinationFile.exists()) {
      destinationFile.delete()
    }

    unregisterDownloadReceiver()

    val request = DownloadManager.Request(Uri.parse(downloadUrl)).apply {
      setTitle("PaperHub update")
      setDescription("Downloading the latest APK")
      setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED)
      setMimeType("application/vnd.android.package-archive")
      setAllowedOverMetered(true)
      setAllowedOverRoaming(false)
      setDestinationInExternalFilesDir(reactContext, Environment.DIRECTORY_DOWNLOADS, fileName)
    }

    val downloadId = downloadManager.enqueue(request)
    activeDownloadId = downloadId
    registerDownloadReceiver(downloadManager, destinationFile)
    promise.resolve(true)
  }

  private fun registerDownloadReceiver(downloadManager: DownloadManager, destinationFile: File) {
    val receiver = object : BroadcastReceiver() {
      override fun onReceive(context: Context?, intent: Intent?) {
        val downloadId = intent?.getLongExtra(DownloadManager.EXTRA_DOWNLOAD_ID, -1L)
        if (downloadId == null || downloadId == -1L || downloadId != activeDownloadId) {
          return
        }

        val query = DownloadManager.Query().setFilterById(downloadId)
        downloadManager.query(query).use { cursor ->
          if (!cursor.moveToFirst()) {
            return
          }

          val status = cursor.getInt(cursor.getColumnIndexOrThrow(DownloadManager.COLUMN_STATUS))
          if (status == DownloadManager.STATUS_SUCCESSFUL) {
            launchInstaller(destinationFile)
            unregisterDownloadReceiver()
          }
        }
      }
    }

    downloadReceiver = receiver
    val filter = IntentFilter(DownloadManager.ACTION_DOWNLOAD_COMPLETE)
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
      reactContext.registerReceiver(receiver, filter, Context.RECEIVER_NOT_EXPORTED)
    } else {
      reactContext.registerReceiver(receiver, filter)
    }
  }

  private fun launchInstaller(destinationFile: File) {
    val apkUri = FileProvider.getUriForFile(
      reactContext,
      "${reactContext.packageName}.fileprovider",
      destinationFile,
    )

    val installIntent = Intent(Intent.ACTION_VIEW).apply {
      setDataAndType(apkUri, "application/vnd.android.package-archive")
      addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
      addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
    }

    reactContext.startActivity(installIntent)
  }

  private fun unregisterDownloadReceiver() {
    downloadReceiver?.let {
      try {
        reactContext.unregisterReceiver(it)
      } catch (_: IllegalArgumentException) {
        // Receiver may already be unregistered.
      }
    }
    downloadReceiver = null
    activeDownloadId = null
  }
}
