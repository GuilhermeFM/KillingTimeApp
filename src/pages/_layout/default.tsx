import React from 'react';

import Menu from './Menu';
import Header from './Header';

import { Container } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <div id="AppTitle">
        <span>Killing Time App</span>
      </div>
      <header>
        <Header />
      </header>
      <nav>
        <Menu />
      </nav>
      <div id="Content">{children}</div>
    </Container>
  );
};

export default Layout;
