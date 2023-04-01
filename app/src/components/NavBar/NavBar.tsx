import { NavLink } from 'react-router-dom';
import cl from './NavBar.module.css';

interface Props {
  links: ReturnType<typeof NavLink>[];
}

export function NavBar({ links }: Props) {
  return (
    <nav>
      <ul className={cl.list}>{links}</ul>
    </nav>
  );
}
