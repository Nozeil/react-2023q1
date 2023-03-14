import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderWithLocation } from './components/Header';

export class App extends Component {
  render() {
    return (
      <>
        <HeaderWithLocation />
        <main>
          <Outlet />
        </main>
      </>
    );
  }
}
