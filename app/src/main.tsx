import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './main.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { createRoutesFromElements, Route } from 'react-router';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { NotFound } from './components/pages/NotFound/NotFound';
import { Layout } from './components/Layout/Layout';
import { Paths } from './enums';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<Navigate to={Paths.NOT_FOUND} />}>
      <Route index path={Paths.HOME} element={<Home />} />
      <Route path={Paths.ABOUT} element={<About />} />
      <Route path={Paths.NOT_FOUND} element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
);
