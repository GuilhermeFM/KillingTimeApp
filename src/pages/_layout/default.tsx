import React from 'react';

import Menu from './Menu';
import Header from './Header';

import { Container, AppTitle, Content } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <AppTitle>
        <span>Killing Time App</span>
      </AppTitle>
      <Header />
      <Menu />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
