import React, { useMemo, useRef, useState } from 'react';
import { Alert, Linking, NativeModules, Platform, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

const BASE_URL = 'https://greasebig.github.io/daily-video-papers';
const LATEST_APK_URL = 'https://github.com/alexandereynolds0-cell/daily-video-papers/releases/latest/download/PaperHub-latest.apk';
const LATEST_RELEASE_URL = 'https://github.com/alexandereynolds0-cell/daily-video-papers/releases/latest';

const updateModule = NativeModules.PaperHubUpdate as
  | { downloadLatestApk: (downloadUrl: string) => Promise<boolean> }
  | undefined;

type Tab = {
  key: 'home' | 'video' | 'world' | 'agent';
  label: string;
  url: string;
  readerMode: boolean;
};

type ReaderState = {
  canPrevDay: boolean;
  canNextDay: boolean;
};

const READER_DEFAULT_STATE: ReaderState = {
  canPrevDay: false,
  canNextDay: false,
};

function getReaderModeScript(enabled: boolean) {
  if (!enabled) {
    return 'true;';
  }

  return `
    (function() {
      const postState = () => {
        try {
          if (!window.ReactNativeWebView || !window.files) {
            return;
          }
          const currentFile = window.__paperHubCurrentFile || window.files[0];
          const currentIdx = window.files.indexOf(currentFile);
          window.ReactNativeWebView.postMessage(JSON.stringify({
            type: 'readerState',
            canPrevDay: currentIdx < window.files.length - 1,
            canNextDay: currentIdx > 0,
          }));
        } catch {
          window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'readerError', message: 'readerState failed' }));
        }
      };

      const applyReaderMode = () => {
        const wrap = document.querySelector('.wrap');
        const navTop = document.querySelector('.nav-top');
        const title = document.querySelector('h1');
        const subtitle = document.querySelector('p');
        const list = document.getElementById('list');
        const content = document.getElementById('content');
        const layout = document.querySelector('.layout');
        const navBottom = document.getElementById('navBottom');
        const orbNodes = document.querySelectorAll('.orb');

        orbNodes.forEach(node => {
          node.style.display = 'none';
        });
        if (wrap) {
          wrap.style.maxWidth = '100%';
          wrap.style.padding = '0 0 120px';
        }
        if (navTop) navTop.style.display = 'none';
        if (title) title.style.display = 'none';
        if (subtitle) subtitle.style.display = 'none';
        if (layout) {
          layout.style.display = 'block';
          layout.style.marginTop = '0';
        }
        if (list) list.style.display = 'none';
        if (navBottom) navBottom.style.display = 'none';
        if (content) {
          content.style.padding = '12px 14px 140px';
          content.style.overflow = 'visible';
          content.style.minHeight = '100vh';
          content.style.margin = '0';
        }
        document.body.style.background = '#f5f7ff';
      };

      const bindBridge = () => {
        if (!window.loadFile || !window.files || window.__paperHubBridgeBound) {
          return false;
        }

        window.__paperHubBridgeBound = true;
        window.__paperHubCurrentFile = window.files[0];
        const originalLoadFile = window.loadFile;
        window.loadFile = function(name, addToHistory) {
          window.__paperHubCurrentFile = name;
          const result = originalLoadFile(name, addToHistory);
          setTimeout(() => {
            applyReaderMode();
            window.scrollTo({ top: 0, behavior: 'instant' });
            postState();
          }, 80);
          return result;
        };

        window.__paperHubPrevDay = function() {
          const currentFile = window.__paperHubCurrentFile || window.files[0];
          const currentIdx = window.files.indexOf(currentFile);
          if (currentIdx < window.files.length - 1) {
            window.loadFile(window.files[currentIdx + 1]);
          }
        };

        window.__paperHubNextDay = function() {
          const currentFile = window.__paperHubCurrentFile || window.files[0];
          const currentIdx = window.files.indexOf(currentFile);
          if (currentIdx > 0) {
            window.loadFile(window.files[currentIdx - 1]);
          }
        };

        applyReaderMode();
        setTimeout(postState, 80);
        return true;
      };

      const setup = () => {
        applyReaderMode();
        if (bindBridge()) {
          return;
        }
        const interval = setInterval(() => {
          applyReaderMode();
          if (bindBridge()) {
            clearInterval(interval);
          }
        }, 150);
        setTimeout(() => clearInterval(interval), 6000);
      };

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setup);
      } else {
        setup();
      }

      window.addEventListener('load', () => {
        applyReaderMode();
        window.scrollTo({ top: 0, behavior: 'instant' });
        setTimeout(postState, 150);
      });
    })();
    true;
  `;
}

function App() {
  const webRef = useRef<WebView>(null);
  const tabs = useMemo<Tab[]>(
    () => [
      { key: 'home', label: 'Home', url: `${BASE_URL}/`, readerMode: false },
      { key: 'video', label: 'Video', url: `${BASE_URL}/video/index.html`, readerMode: true },
      { key: 'world', label: 'World Model', url: `${BASE_URL}/world-model/index.html`, readerMode: true },
      { key: 'agent', label: 'Agent', url: `${BASE_URL}/agent/index.html`, readerMode: true },
    ],
    [],
  );
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [readerState, setReaderState] = useState<ReaderState>(READER_DEFAULT_STATE);
  const [isUpdating, setIsUpdating] = useState(false);
  const readerModeScript = useMemo(() => getReaderModeScript(activeTab.readerMode), [activeTab.readerMode]);

  const switchTab = (tab: Tab) => {
    setActiveTab(tab);
    setCanGoBack(false);
    setCanGoForward(false);
    setReaderState(READER_DEFAULT_STATE);
  };

  const goToPreviousDay = () => {
    webRef.current?.injectJavaScript('window.__paperHubPrevDay && window.__paperHubPrevDay(); true;');
  };

  const goToNextDay = () => {
    webRef.current?.injectJavaScript('window.__paperHubNextDay && window.__paperHubNextDay(); true;');
  };

  const updateApp = async () => {
    if (Platform.OS !== 'android') {
      await Linking.openURL(LATEST_RELEASE_URL);
      return;
    }

    if (!updateModule?.downloadLatestApk) {
      await Linking.openURL(LATEST_RELEASE_URL);
      return;
    }

    try {
      setIsUpdating(true);
      await updateModule.downloadLatestApk(LATEST_APK_URL);
      Alert.alert('开始更新', '最新 APK 已开始下载，下载完成后会自动弹出安装界面。');
    } catch {
      Alert.alert(
        '需要允许安装',
        '请先允许从本应用安装未知来源 APK，然后再点一次 Update App。',
      );
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f7ff" />
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right', 'bottom']}>
        <WebView
          key={activeTab.key}
          ref={webRef}
          source={{ uri: activeTab.url }}
          style={styles.webView}
          startInLoadingState
          originWhitelist={['https://*']}
          injectedJavaScript={readerModeScript}
          onMessage={event => {
            try {
              const payload = JSON.parse(event.nativeEvent.data) as Partial<ReaderState> & { type?: string };
              if (payload.type === 'readerState') {
                setReaderState({
                  canPrevDay: Boolean(payload.canPrevDay),
                  canNextDay: Boolean(payload.canNextDay),
                });
              }
            } catch {
              // Ignore non-JSON messages from the web content.
            }
          }}
          onNavigationStateChange={state => {
            setCanGoBack(state.canGoBack);
            setCanGoForward(state.canGoForward);
          }}
        />

        <View style={styles.bottomOverlay} pointerEvents="box-none">
          <View style={styles.controlsCard}>
            <View style={styles.tabRow}>
              {tabs.map(tab => (
                <Pressable
                  key={tab.key}
                  onPress={() => switchTab(tab)}
                  style={[styles.tabButton, activeTab.key === tab.key && styles.tabButtonActive]}
                >
                  <Text style={[styles.tabButtonText, activeTab.key === tab.key && styles.tabButtonTextActive]}>
                    {tab.label}
                  </Text>
                </Pressable>
              ))}
            </View>

            <View style={styles.actionRow}>
              {activeTab.readerMode ? (
                <>
                  <Pressable
                    onPress={goToPreviousDay}
                    disabled={!readerState.canPrevDay}
                    style={[styles.actionButton, !readerState.canPrevDay && styles.actionButtonDisabled]}
                  >
                    <Text style={styles.actionButtonText}>Older</Text>
                  </Pressable>
                  <Pressable
                    onPress={goToNextDay}
                    disabled={!readerState.canNextDay}
                    style={[styles.actionButton, !readerState.canNextDay && styles.actionButtonDisabled]}
                  >
                    <Text style={styles.actionButtonText}>Newer</Text>
                  </Pressable>
                </>
              ) : null}

              <Pressable
                onPress={() => webRef.current?.goBack()}
                disabled={!canGoBack}
                style={[styles.actionButton, !canGoBack && styles.actionButtonDisabled]}
              >
                <Text style={styles.actionButtonText}>Back</Text>
              </Pressable>
              <Pressable
                onPress={() => webRef.current?.goForward()}
                disabled={!canGoForward}
                style={[styles.actionButton, !canGoForward && styles.actionButtonDisabled]}
              >
                <Text style={styles.actionButtonText}>Forward</Text>
              </Pressable>

              <Pressable
                onPress={updateApp}
                disabled={isUpdating}
                style={[styles.updateButton, isUpdating && styles.actionButtonDisabled]}
              >
                <Text style={styles.updateButtonText}>{isUpdating ? 'Updating…' : 'Update App'}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7ff',
  },
  webView: {
    flex: 1,
    backgroundColor: '#f5f7ff',
  },
  bottomOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  controlsCard: {
    padding: 10,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.96)',
    borderWidth: 1,
    borderColor: 'rgba(12,36,66,0.08)',
    shadowColor: '#122033',
    shadowOpacity: 0.16,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 6 },
  },
  tabRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 8,
  },
  actionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: '#eef2ff',
  },
  tabButtonActive: {
    backgroundColor: '#0f172a',
  },
  tabButtonText: {
    color: '#0f172a',
    fontSize: 12,
    fontWeight: '700',
  },
  tabButtonTextActive: {
    color: '#ffffff',
  },
  actionButton: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: '#101828',
  },
  actionButtonDisabled: {
    opacity: 0.4,
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
  updateButton: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: '#2ec4b6',
  },
  updateButtonText: {
    color: '#06201d',
    fontSize: 12,
    fontWeight: '800',
  },
});

export default App;
