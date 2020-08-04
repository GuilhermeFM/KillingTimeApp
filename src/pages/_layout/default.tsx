import React, { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  FiBell,
  FiHome,
  FiInfo,
  FiPhone,
  FiLogOut,
  FiSliders,
  FiChevronRight,
} from 'react-icons/fi';

import { FaAngleDown, FaCircle } from 'react-icons/fa';

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
      <Menu>
        <ul>
          <li>
            <a href="/#">
              <FiHome size={24} />
              Home
            </a>
          </li>
          <li>
            <a href="/#">
              <FiInfo size={24} />
              About
            </a>
          </li>
          <li>
            <a href="/#">
              <FiPhone size={24} />
              Contact
            </a>
          </li>
          <li>
            <a href="/#">
              <FiSliders size={24} />
              Options
              <FaAngleDown
                style={{
                  marginLeft: 'auto',
                  marginRight: '15px',
                  paddingTop: 2,
                }}
                size={22}
              />
            </a>
          </li>
          <li>
            <a href="/#">
              <FaCircle
                size={8}
                style={{ marginLeft: '8px', marginRight: '18px' }}
              />
              Groups
            </a>
          </li>
          <li>
            <a href="/#">
              <FaCircle
                size={8}
                style={{ marginLeft: '8px', marginRight: '18px' }}
              />
              Groups
            </a>
          </li>
          <li>
            <a href="/#">
              <FaCircle
                size={8}
                style={{ marginLeft: '8px', marginRight: '18px' }}
              />
              Groups
            </a>
          </li>
          <li>
            <a href="/#">
              <FaCircle
                size={8}
                style={{ marginLeft: '8px', marginRight: '18px' }}
              />
              Groups
            </a>
          </li>
          <li>
            <a href="/#">
              <FaCircle
                size={8}
                style={{ marginLeft: '8px', marginRight: '18px' }}
              />
              Groups
            </a>
          </li>
          <li>
            <a href="/#">
              <FaCircle
                size={8}
                style={{ marginLeft: '8px', marginRight: '18px' }}
              />
              Groups
            </a>
          </li>
          <li>
            <a href="/#">
              <FaCircle
                size={8}
                style={{ marginLeft: '8px', marginRight: '18px' }}
              />
              Groups
            </a>
          </li>
          <li>
            <a href="/#">
              <FaCircle
                size={8}
                style={{ marginLeft: '8px', marginRight: '18px' }}
              />
              Groups
            </a>
          </li>
          <li>
            <a href="/#">
              <FaCircle
                size={8}
                style={{ marginLeft: '8px', marginRight: '18px' }}
              />
              Groups
            </a>
          </li>
          <li>
            <a href="/#">
              <FaCircle
                size={8}
                style={{ marginLeft: '8px', marginRight: '18px' }}
              />
              Groups
            </a>
          </li>
          <li>
            <a href="/#">
              <FaCircle
                size={8}
                style={{ marginLeft: '8px', marginRight: '18px' }}
              />
              Groups
            </a>
          </li>
          <li>
            <a href="/#">
              <FaCircle
                size={8}
                style={{ marginLeft: '8px', marginRight: '18px' }}
              />
              Groups
            </a>
          </li>
          <li>
            <a href="/#">
              <FaCircle
                size={8}
                style={{ marginLeft: '8px', marginRight: '18px' }}
              />
              Groups
            </a>
          </li>
          <li>
            <a href="/#">
              <FaCircle
                size={8}
                style={{ marginLeft: '8px', marginRight: '18px' }}
              />
              Groups
            </a>
          </li>
          <li>
            <a href="/#">
              <FaCircle
                size={8}
                style={{ marginLeft: '8px', marginRight: '18px' }}
              />
              Groups
            </a>
          </li>
          <li>
            <a href="/#">
              <FaCircle
                size={8}
                style={{ marginLeft: '8px', marginRight: '18px' }}
              />
              Groups
            </a>
          </li>
          <li>
            <a href="/#">
              <FaCircle
                size={8}
                style={{ marginLeft: '8px', marginRight: '18px' }}
              />
              Groups
            </a>
          </li>
          <li>
            <a href="/#">
              <FaCircle
                size={8}
                style={{ marginLeft: '8px', marginRight: '18px' }}
              />
              Groups
            </a>
          </li>
          <li>
            <a href="/#">
              <FaCircle
                size={8}
                style={{ marginLeft: '8px', marginRight: '18px' }}
              />
              Groups
            </a>
          </li>
          <li>
            <a href="/#">
              <FaCircle
                size={8}
                style={{ marginLeft: '8px', marginRight: '18px' }}
              />
              Groups
            </a>
          </li>
          <li>
            <a href="/#">
              <FaCircle
                size={8}
                style={{ marginLeft: '8px', marginRight: '18px' }}
              />
              Groups
            </a>
          </li>
          <li>
            <a href="/#">
              <FaCircle
                size={8}
                style={{ marginLeft: '8px', marginRight: '18px' }}
              />
              Groups
            </a>
          </li>
          <li>
            <a href="/#" onClick={handleSignOut}>
              <FiLogOut size={24} />
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
