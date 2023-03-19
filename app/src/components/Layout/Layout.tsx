import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderWithLocation } from '../Header/Header';
import cl from './Layout.module.css';

export class Layout extends Component {
  render() {
    return (
      <div className={cl.container}>
        <HeaderWithLocation />
        <main className={cl.main}>
          <Outlet />
        </main>
      </div>
    );
  }
}
