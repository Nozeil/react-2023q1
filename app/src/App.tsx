import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderWithLocation } from './components/Header/Header';
import cl from './App.module.css';

export class App extends Component {
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
