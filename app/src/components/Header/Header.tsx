import { Paths, TestIds } from '@/enums';
import { withLocation, WithLocationProps } from '@/HOCs/HOCs';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import cl from './Header.module.css';

interface State {
  title: string;
}

const getTitle = (path: string) => {
  const titles = {
    [Paths.HOME]: 'Home',
    [Paths.ABOUT]: 'About us',
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

class Header extends Component<WithLocationProps, State> {
  paths: Paths[];

  constructor(props: WithLocationProps) {
    super(props);
    this.state = { title: getTitle(this.props.location.pathname) };
    this.paths = [Paths.HOME, Paths.ABOUT];
  }

  shouldComponentUpdate(_: WithLocationProps, nextState: Readonly<State>) {
    return !(this.state.title === nextState.title);
  }

  onClickHandler = () =>
    this.setState((_, prevProps) => {
      const path = prevProps.location.pathname;
      return {
        title: getTitle(path),
      };
    });

  generateLinkClassName = ({ isActive }: { isActive: boolean }) => {
    return isActive ? `${cl.link} ${cl.active}` : `${cl.link}`;
  };

  render() {
    return (
      <header className={cl.header} data-testid={TestIds.HEADER_ID}>
        <h3 className={cl.title}>{this.state.title}</h3>
        <NavBar
          links={this.paths.map((path) => (
            <li key={path}>
              <NavLink
                to={path}
                key={path}
                onClick={this.onClickHandler}
                className={this.generateLinkClassName}
                data-testid={path}
              >
                {getTitle(path)}
              </NavLink>
            </li>
          ))}
        />
      </header>
    );
  }
}

export const HeaderWithLocation = withLocation(Header);
