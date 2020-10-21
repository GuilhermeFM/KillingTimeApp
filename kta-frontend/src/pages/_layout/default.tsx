import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { Container, SideMenu, Header, Content, Footer } from './styles';

const Default: React.FC = ({ children }) => {
  return (
    <Container>
      <SideMenu>
        <Scrollbars style={{ height: '100%' }}>Side Menu</Scrollbars>
      </SideMenu>
      <Header>Header</Header>
      <Content>
        <Scrollbars style={{ height: '100%' }}>{children}</Scrollbars>
      </Content>
      <Footer>Footer</Footer>
    </Container>
  );
};

export default Default;
