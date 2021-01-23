import React from 'react';

import Navbar from './Navbar';
import Breadcumb from './Breadcumb';
import * as HeaderItem from './HeaderItem';

import { ContentScroll, Container } from './styles';

const Default: React.FC = ({ children }) => {
  return (
    <Container>
      <div id="side-menu">
        <Navbar />
      </div>
      <div id="header">
        <HeaderItem.HeaderSearchItem />
        <HeaderItem.HeaderProfileItem />
      </div>
      <div id="main">
        <ContentScroll>
          <Breadcumb />
          {children}
          <div id="footer">Footer</div>
        </ContentScroll>
      </div>
    </Container>
  );
};

export default Default;
