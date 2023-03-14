import { Component } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  links: ReturnType<typeof NavLink>[];
}

export class NavBar extends Component<Props> {
  render() {
    const links = this.props.links;
    return <nav>{links}</nav>;
  }
}
