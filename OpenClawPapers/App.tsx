import React, { useMemo, useRef, useState } from 'react';
import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const BASE_URL = 'https://greasebig.github.io/daily-video-papers';

function App() {
  const webRef = useRef<WebView>(null);
  const tabs = useMemo(
    () => [
      { key: 'home', label: 'Home', url: `${BASE_URL}/` },
      { key: 'video', label: 'Video', url: `${BASE_URL}/video/index.html` },
      { key: 'world', label: 'World Model', url: `${BASE_URL}/world-model/index.html` },
      { key: 'agent', label: 'Agent', url: `${BASE_URL}/agent/index.html` },
    ],
    [],
  );
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.navTop}>
          {tabs.map(tab => (
            <Pressable
              key={tab.key}
              onPress={() => setActiveTab(tab)}
              style={[styles.navButton, activeTab.key === tab.key && styles.navButtonActive]}
            >
              <Text style={[styles.navButtonText, activeTab.key === tab.key && styles.navButtonTextActive]}>
                {tab.label}
              </Text>
            </Pressable>
          ))}
        </View>

        <WebView
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

        <View style={styles.navBottom}>
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
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f6ff' },
  navTop: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    backgroundColor: '#f2f6ff',
  },
  navBottom: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'flex-start',
    backgroundColor: '#f2f6ff',
  },
  navButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderColor: 'rgba(12,36,66,0.18)',
    borderWidth: 1,
  },
  navButtonActive: {
    backgroundColor: '#2ec4b6',
    borderColor: '#2ec4b6',
  },
  navButtonDisabled: {
    opacity: 0.5,
  },
  navButtonText: {
    color: '#0b1b2b',
    fontSize: 12,
    fontWeight: '600',
  },
  navButtonTextActive: {
    color: '#ffffff',
  },
  webView: { flex: 1, backgroundColor: 'transparent' },
});

export default App;
