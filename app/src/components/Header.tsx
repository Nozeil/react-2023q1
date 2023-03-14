import { Paths } from '@/enums';
import { withLocation, WithLocationProps } from '@/HOCs/HOCs';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { NavBar } from './NavBar';

interface State {
  title: string;
}

class Header extends Component<WithLocationProps, State> {
  paths: Paths[];

  constructor(props: WithLocationProps) {
    super(props);
    this.state = { title: this.getTitle(this.props.location.pathname) };
    this.paths = [Paths.HOME, Paths.ABOUT];
  }

  shouldComponentUpdate(_: WithLocationProps, nextState: Readonly<State>) {
    return !(this.state.title === nextState.title);
  }

  getTitle = (path: string) => {
    const titles = {
      [Paths.HOME]: 'Home',
      [Paths.ABOUT]: 'About',
      [Paths.NOT_FOUND]: '404',
    };

    switch (path) {
      case Paths.HOME:
        return titles[Paths.HOME];
      case Paths.ABOUT:
        return titles[Paths.ABOUT];
      default:
        return titles[Paths.NOT_FOUND];
    }
  };

  onClickHandler = () =>
    this.setState((_, prevProps) => {
      const path = prevProps.location.pathname;
      return {
        title: this.getTitle(path),
      };
    });

  render() {
    return (
      <header>
        <h3>{this.state.title}</h3>
        <NavBar
          links={this.paths.map((path) => (
            <NavLink
              to={path}
              key={path}
              onClick={this.onClickHandler}
              style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
            >
              {this.getTitle(path)}
            </NavLink>
          ))}
        />
      </header>
    );
  }
}

export const HeaderWithLocation = withLocation(Header);
