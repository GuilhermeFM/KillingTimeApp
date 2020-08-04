import React, { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import {
  FiBell,
  FiHome,
  FiInfo,
  FiPhone,
  FiChevronRight,
  FiLogOut,
} from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';
import { Container, Menu, Header, Content } from './styles';

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
      <Menu>
        <div>
          <span>Killing Time App</span>
        </div>
        <div>
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
        </div>
      </Menu>
      <Content>
        <Header>
          <div>
            {pathname
              .split('/')
              .filter((pathPart) => pathPart !== '')
              .map((pathPart) => (
                <div key={pathPart}>
                  <FiChevronRight size={24} />
                  <span>{pathPart}</span>
                </div>
              ))}
          </div>
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
        {children}
      </Content>
    </Container>
  );
};

export default Layout;
