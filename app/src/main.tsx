import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import './scss/styles.scss';
import 'bootstrap';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { createRoutesFromElements, Route } from 'react-router';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { NotFound } from './components/pages/NotFound';
import { App } from './App';
import { Paths } from './enums';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} errorElement={<Navigate to={Paths.NOT_FOUND} />}>
      <Route index path={Paths.HOME} element={<Home />} />
      <Route path={Paths.ABOUT} element={<About />} />
      <Route path={Paths.NOT_FOUND} element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
