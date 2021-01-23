import React, { useCallback, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useHistory, useLocation } from 'react-router-dom';

import NavbarHeader from '../NavbarHeader';
import NavSection from '../NavSection';
import NavItem from '../NavItem';

import './animation.css';
import { Navbar, ContentScroll } from './styles';

const NavbarComponent: React.FC = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();

  const [currentMenu, setCurrentMenu] = useState<string>('Main');

  const handleMenuNavigation = useCallback(
    (e: React.SyntheticEvent, menu: string) => {
      e.preventDefault();
      setCurrentMenu(menu);
    },
    [],
  );

  const handleNavigation = useCallback(
    (e: React.SyntheticEvent, path: string) => {
      e.preventDefault();
      push(path);
    },
    [push],
  );

  return (
    <Navbar>
      <NavbarHeader />
      <ContentScroll>
        <CSSTransition
          unmountOnExit
          timeout={500}
          in={currentMenu === 'Main'}
          classNames="primary"
        >
          <ul>
            <NavItem
              description="Home"
              leftIcon="flaticon2-architecture-and-city"
              onClick={e => handleNavigation(e, '/Home')}
              selected={pathname === '/Home'}
            />

            <NavSection description="Management" />
            <NavItem
              leftIcon="flaticon2-calendar-3"
              description="Registration"
              onClick={e => handleMenuNavigation(e, 'Registration')}
            />
          </ul>
        </CSSTransition>

        <CSSTransition
          unmountOnExit
          timeout={500}
          in={currentMenu === 'Registration'}
          classNames="secondary"
        >
          <ul>
            <NavItem
              leftIcon="flaticon2-back"
              description="Back"
              onClick={e => handleMenuNavigation(e, 'Main')}
            />
            <NavSection description="Registration" />

            <NavItem
              description="Users"
              leftIcon="flaticon2-user-1"
              onClick={e => handleNavigation(e, '/Users')}
              selected={pathname === '/Users'}
            />

            <NavItem
              description="Groups"
              leftIcon="flaticon2-group"
              onClick={e => handleNavigation(e, '/Groups')}
              selected={pathname === '/Groups'}
            />

            <NavItem
              description="Permissions"
              leftIcon="flaticon-security"
              onClick={e => handleNavigation(e, '/Permissions')}
              selected={pathname === '/Permissions'}
            />
          </ul>
        </CSSTransition>
      </ContentScroll>
    </Navbar>
  );
};

export default NavbarComponent;
