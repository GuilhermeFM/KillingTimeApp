import React from 'react';

import SideMenu from './SideMenu';
import SubHeader from './SubHeader';

import { ContentScroll, Container } from './styles';

const Default: React.FC = ({ children }) => {
  return (
    <Container>
      <div id="side-menu">
        <SideMenu />
      </div>
      <div id="header">Header</div>
      <div id="main">
        <ContentScroll>
          <SubHeader />
          {children}
          <div id="footer">Footer</div>
        </ContentScroll>
      </div>
    </Container>
  );
};

export default Default;
