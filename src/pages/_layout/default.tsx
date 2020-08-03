import React from 'react';
import { FiBell, FiChevronRight } from 'react-icons/fi';

import { Container, Menu, Header, Content } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Menu>
        <div>
          <span>Killing Time App</span>
        </div>
        <div>
          <ul>
            <li>
              <a href="/#">Página inicial</a>
            </li>
            <li>
              <a href="/#">Sobre</a>
            </li>
            <li>
              <a href="/#">Contato</a>
            </li>
          </ul>
        </div>
      </Menu>
      <Content>
        <Header>
          <div>
            <FiChevronRight size={24} color="#000" />
            <span>Dashboard</span>
          </div>
          <div>
            <FiBell size={24} color="#000" />
            <img
              src="https://avatars1.githubusercontent.com/u/707177?s=460"
              alt="Profile"
            />
            <div>
              <p>Guilherme F Meira</p>
              <p>Last access: 02/08/2020 às 20:30</p>
            </div>
          </div>
        </Header>

        {children}
      </Content>
    </Container>
  );
};

export default Layout;
