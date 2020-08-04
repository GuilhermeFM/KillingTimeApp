import React, { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import {
  FiBell,
  FiHome,
  FiInfo,
  FiPhone,
  FiLogOut,
  FiChevronRight,
} from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';
import { Container, AppTitle, Header, Menu, Content } from './styles';

const Layout: React.FC = ({ children }) => {
  const { user, signOut } = useAuth();
  const { pathname } = useLocation();

  const handleSignOut = useCallback(
    (e: React.BaseSyntheticEvent) => {
      e.preventDefault();
      signOut();
    },
    [signOut],
  );

  return (
    <Container>
      <AppTitle>
        <span>Killing Time App</span>
      </AppTitle>
      <Header>
        {pathname
          .split('/')
          .filter((pathPart) => pathPart !== '')
          .map((pathPart) => (
            <div key={pathPart}>
              <FiChevronRight size={24} />
              <span>{pathPart}</span>
            </div>
          ))}
        <div>
          <FiBell size={24} />
          <div>
            <p>{user.name}</p>
          </div>
          <img
            src={`https://api.adorable.io/avatars/48/${user.name}@adorable.png`}
            alt="Profile"
          />
        </div>
      </Header>
      <Menu>
        <ul>
          <li>
            <FiHome size={24} />
            <a href="/#">Home</a>
          </li>
          <li>
            <FiInfo size={24} />
            <a href="/#">About</a>
          </li>
          <li>
            <FiPhone size={24} />
            <a href="/#">Contact</a>
          </li>
          <li>
            <FiLogOut size={24} />
            <a href="/#" onClick={handleSignOut}>
              Logout
            </a>
          </li>
        </ul>
        <p>All Rights Reserved v1.0</p>
      </Menu>
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
