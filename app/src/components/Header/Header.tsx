import { Paths, TestIds } from '@/enums';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import cl from './Header.module.css';

const getTitle = (path: string) => {
  const titles = {
    [Paths.HOME]: 'Home',
    [Paths.ABOUT]: 'About us',
    [Paths.FORM]: 'Form',
    [Paths.NOT_FOUND]: '404',
  };

  switch (path) {
    case Paths.HOME:
      return titles[Paths.HOME];
    case Paths.ABOUT:
      return titles[Paths.ABOUT];
    case Paths.FORM:
      return titles[Paths.FORM];
    default:
      return titles[Paths.NOT_FOUND];
  }
};

export function Header() {
  const paths = [Paths.HOME, Paths.ABOUT, Paths.FORM];
  const location = useLocation();
  const [title, setTitle] = useState<string>(getTitle(location.pathname));

  useEffect(() => {
    setTitle(getTitle(location.pathname));
  }, [location]);

  const generateLinkClassName = ({ isActive }: { isActive: boolean }) => {
    return isActive ? `${cl.link} ${cl.active}` : `${cl.link}`;
  };

  return (
    <header className={cl.header} data-testid={TestIds.HEADER_ID}>
      <h3 className={cl.title}>{title}</h3>
      <NavBar
        links={paths.map((path) => (
          <li key={path}>
            <NavLink to={path} key={path} className={generateLinkClassName} data-testid={path}>
              {getTitle(path)}
            </NavLink>
          </li>
        ))}
      />
    </header>
  );
}
