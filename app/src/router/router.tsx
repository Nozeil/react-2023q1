import Form from '@/components/Form/Form';
import { Layout } from '@/components/Layout/Layout';
import { About } from '@/components/pages/About';
import { Home } from '@/components/pages/Home';
import { NotFound } from '@/components/pages/NotFound/NotFound';
import { Paths } from '@/enums';
import { Route, Navigate, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

export const routes = createRoutesFromElements(
  <Route element={<Layout />} errorElement={<Navigate to={Paths.NOT_FOUND} />}>
    <Route index path={Paths.HOME} element={<Home />} />
    <Route path={Paths.ABOUT} element={<About />} />
    <Route path={Paths.FORM} element={<Form />} />
    <Route path={Paths.NOT_FOUND} element={<NotFound />} />
  </Route>
);

export const router = createBrowserRouter(routes);
