import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from 'store';
import theme from 'styles/theme';
import { AuthenticationProvider } from 'hooks/useAuthentication';

import App from './App';

const Root: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AuthenticationProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthenticationProvider>
    </ThemeProvider>
  </Provider>
);

export default Root;
