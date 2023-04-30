import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { About } from './components/pages/About';
import { Home } from './components/pages/Home';
import { NotFound } from './components/pages/NotFound/NotFound';
import { Paths } from './enums';
import 'normalize.css';
import './App.css';
import Form from './components/Form/Form';

interface Props {
  isStatic?: boolean;
}

export function App({ isStatic }: Props) {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path={Paths.HOME} element={<Home />} />
        <Route path={Paths.ABOUT} element={<About />} />
        <Route path={Paths.FORM} element={<Form />} />
        <Route path={Paths.NOT_FOUND} element={<NotFound />} />
      </Route>
      {!isStatic && <Route path="*" element={<Navigate to={Paths.NOT_FOUND} replace />} />}
    </Routes>
  );
}
