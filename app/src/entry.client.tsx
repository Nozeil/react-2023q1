import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App isStatic={false} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
