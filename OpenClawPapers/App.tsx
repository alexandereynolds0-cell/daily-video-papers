import React, { useMemo, useRef, useState } from 'react';
import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
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

type Tab = {
  key: 'home' | 'video' | 'world' | 'agent';
  label: string;
  url: string;
  readerMode: boolean;
};

type ReaderState = {
  currentDate: string;
  canPrevDay: boolean;
  canNextDay: boolean;
};

const READER_DEFAULT_STATE: ReaderState = {
  currentDate: 'Latest',
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
            currentDate: currentFile ? currentFile.replace('.md', '') : 'Latest',
            canPrevDay: currentIdx < window.files.length - 1,
            canNextDay: currentIdx > 0,
          }));
        } catch (error) {
          window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'readerError', message: String(error) }));
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

        if (wrap) {
          wrap.style.maxWidth = '100%';
          wrap.style.padding = '12px 14px 120px';
        }
        if (navTop) navTop.style.display = 'none';
        if (title) {
          title.style.fontSize = '22px';
          title.style.marginBottom = '4px';
        }
        if (subtitle) subtitle.style.display = 'none';
        if (layout) {
          layout.style.display = 'block';
          layout.style.marginTop = '10px';
        }
        if (list) list.style.display = 'none';
        if (navBottom) navBottom.style.display = 'none';
        if (content) {
          content.style.padding = '0';
          content.style.overflow = 'visible';
          content.style.minHeight = '70vh';
        }
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
          setTimeout(postState, 80);
          return result;
        };

        window.__paperHubPrevDay = function() {
          const currentFile = window.__paperHubCurrentFile || window.files[0];
          const currentIdx = window.files.indexOf(currentFile);
          if (currentIdx < window.files.length - 1) {
            window.loadFile(window.files[currentIdx + 1]);
            const content = document.getElementById('content');
            if (content) content.scrollTop = 0;
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        };

        window.__paperHubNextDay = function() {
          const currentFile = window.__paperHubCurrentFile || window.files[0];
          const currentIdx = window.files.indexOf(currentFile);
          if (currentIdx > 0) {
            window.loadFile(window.files[currentIdx - 1]);
            window.scrollTo({ top: 0, behavior: 'smooth' });
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

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#0f1021" />
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <View style={styles.heroCard}>
          <Text style={styles.heroEyebrow}>PaperHub</Text>
          <Text style={styles.heroTitle}>Daily Video Papers</Text>
          <Text style={styles.heroSubtitle}>
            在 App 里直接阅读每日论文，不再先被一长串日期导航挡住。
          </Text>
        </View>

        <View style={styles.navTop}>
          {tabs.map(tab => (
            <Pressable
              key={tab.key}
              onPress={() => switchTab(tab)}
              style={[styles.navButton, activeTab.key === tab.key && styles.navButtonActive]}
            >
              <Text style={[styles.navButtonText, activeTab.key === tab.key && styles.navButtonTextActive]}>
                {tab.label}
              </Text>
            </Pressable>
          ))}
        </View>

        {activeTab.readerMode ? (
          <View style={styles.readerToolbar}>
            <View style={styles.readerMeta}>
              <Text style={styles.readerModeLabel}>{activeTab.label}</Text>
              <Text style={styles.readerDate}>{readerState.currentDate}</Text>
            </View>
            <View style={styles.readerActions}>
              <Pressable
                onPress={goToPreviousDay}
                disabled={!readerState.canPrevDay}
                style={[styles.secondaryAction, !readerState.canPrevDay && styles.navButtonDisabled]}
              >
                <Text style={styles.secondaryActionText}>Older</Text>
              </Pressable>
              <Pressable
                onPress={goToNextDay}
                disabled={!readerState.canNextDay}
                style={[styles.primaryAction, !readerState.canNextDay && styles.navButtonDisabled]}
              >
                <Text style={styles.primaryActionText}>Newer</Text>
              </Pressable>
            </View>
          </View>
        ) : null}

        <WebView
          key={activeTab.key}
          ref={webRef}
          source={{ uri: activeTab.url }}
          style={styles.webView}
          startInLoadingState
          originWhitelist={['https://*']}
          onNavigationStateChange={state => {
            setCanGoBack(state.canGoBack);
            setCanGoForward(state.canGoForward);
          }}
        />

        <SafeAreaView style={styles.navBottom} edges={['bottom']}>
          <Pressable
            onPress={() => webRef.current?.goBack()}
            disabled={!canGoBack}
            style={[styles.navButton, !canGoBack && styles.navButtonDisabled]}
          >
            <Text style={styles.navButtonText}>Back</Text>
          </Pressable>
          <Pressable
            onPress={() => webRef.current?.goForward()}
            disabled={!canGoForward}
            style={[styles.navButton, !canGoForward && styles.navButtonDisabled]}
          >
            <Text style={styles.navButtonText}>Forward</Text>
          </Pressable>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090b1a',
  },
  heroCard: {
    marginHorizontal: 14,
    marginTop: 12,
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderRadius: 24,
    backgroundColor: '#16192f',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    shadowColor: '#000000',
    shadowOpacity: 0.18,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
  },
  heroEyebrow: {
    color: '#9ee7ff',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  heroTitle: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 8,
  },
  heroSubtitle: {
    color: 'rgba(255,255,255,0.72)',
    fontSize: 14,
    lineHeight: 20,
  },
  navTop: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  readerToolbar: {
    marginHorizontal: 14,
    marginBottom: 10,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 20,
    backgroundColor: '#13162a',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  readerMeta: {
    flex: 1,
  },
  readerModeLabel: {
    color: '#8ea4ff',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  readerDate: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
  readerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  navBottom: {
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 14,
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'flex-start',
    backgroundColor: '#090b1a',
  },
  navButton: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderColor: 'rgba(255,255,255,0.12)',
    borderWidth: 1,
  },
  navButtonActive: {
    backgroundColor: '#8a5cff',
    borderColor: '#8a5cff',
  },
  navButtonDisabled: {
    opacity: 0.45,
  },
  navButtonText: {
    color: '#111426',
    fontSize: 12,
    fontWeight: '700',
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
  secondaryAction: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  secondaryActionText: {
    color: '#e9ecff',
    fontSize: 12,
    fontWeight: '700',
  },
  primaryAction: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: '#2ee6b8',
  },
  primaryActionText: {
    color: '#061017',
    fontSize: 12,
    fontWeight: '800',
  },
  webView: {
    flex: 1,
    backgroundColor: '#f5f7ff',
    marginHorizontal: 14,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: 'hidden',
  },
});

export default App;
