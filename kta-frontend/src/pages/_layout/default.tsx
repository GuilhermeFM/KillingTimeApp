import React from 'react';

import {
  ContentScroll,
  Container,
  SideMenu,
  Header,
  SubHeader,
  Main,
  Footer,
} from './styles';

const Default: React.FC = ({ children }) => {
  return (
    <Container>
      <SideMenu>
        <ContentScroll>Side Menu</ContentScroll>
      </SideMenu>
      <Header>Header</Header>
      <Main>
        <ContentScroll>
          <SubHeader>
            <h5>Tabbed Subheader</h5>
            <ul>
              <li>
                <a href="/#">Subheaders</a>
              </li>
              <li>
                <a href="/#">Classic</a>
              </li>
            </ul>
          </SubHeader>
          {children}
          <Footer>Footer</Footer>
        </ContentScroll>
      </Main>
    </Container>
  );
};

export default Default;
