import React from 'react';
import {
  FiBell,
  FiHome,
  FiInfo,
  FiPhone,
  FiMenu,
  FiChevronRight,
} from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';
import { Container, Menu, Header, Content } from './styles';

const Layout: React.FC = ({ children }) => {
  const { user } = useAuth();

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
          </ul>
          <p>All Rights Reserved v1.0</p>
        </div>
      </Menu>
      <Content>
        <Header>
          <div>
            <FiChevronRight size={24} />
            <span>Home</span>
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
