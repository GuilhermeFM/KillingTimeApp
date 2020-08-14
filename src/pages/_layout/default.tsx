import React from 'react';

import Nav from './Nav';
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
        <Nav />
      </nav>

      <div id="AppContent">{children}</div>
    </Container>
  );
};

export default Layout;
