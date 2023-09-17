import React from 'react';
import ReactDOM from 'react-dom/client';

import './i18n';

import { App } from './App.jsx';
import { DarkModeProvider } from './providers/dark-mode-provider/dark-mode-provider.jsx';

import './styles/null.scss';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>,
)
