import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import cl from './Layout.module.css';

export function Layout() {
  return (
    <div className={cl.container}>
      <Header />
      <main className={cl.main}>
        <Outlet />
      </main>
    </div>
  );
}
