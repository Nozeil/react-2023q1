import ReactDOM from 'react-dom/client';
import React from 'react';
import { RouterProvider, BrowserRouter } from 'react-router-dom';
import { router } from './router/router';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
