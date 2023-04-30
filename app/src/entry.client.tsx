import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { initializeStore } from './redux/store';
import { Provider } from 'react-redux';

const store = initializeStore(window.__PRELOADED_STATE__);

delete window.__PRELOADED_STATE__;

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
