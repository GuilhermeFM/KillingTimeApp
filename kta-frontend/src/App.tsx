import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import lightDark from './themes/lightDark';
import { AuthProvider } from './hooks/auth';
import { ToastProvider } from './hooks/toast';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightDark}>
      <BrowserRouter>
        <AuthProvider>
          <ToastProvider>
            <Routes />
          </ToastProvider>
        </AuthProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
