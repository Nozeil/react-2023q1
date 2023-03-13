import { Component } from 'react';
import { Outlet } from 'react-router-dom';

export class App extends Component {
  render() {
    return <Outlet />;
  }
}
