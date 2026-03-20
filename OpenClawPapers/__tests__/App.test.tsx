/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

jest.mock('react-native-webview', () => {
  const ReactNativeWebViewMock = require('react');
  const { View } = require('react-native');

  return {
    WebView: ReactNativeWebViewMock.forwardRef((props, _ref) => ReactNativeWebViewMock.createElement(View, props)),
  };
});

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});
