import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import cl from './NavBar.module.css';

interface Props {
  links: ReturnType<typeof NavLink>[];
}

export class NavBar extends Component<Props> {
  render() {
    const links = this.props.links;
    return (
      <nav>
        <ul className={cl.list}>{links}</ul>
      </nav>
    );
  }
}
