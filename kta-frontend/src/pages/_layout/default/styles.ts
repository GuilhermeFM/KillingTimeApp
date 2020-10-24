import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 265px auto;
  grid-template-rows: 60px auto;
  grid-template-areas:
    'menu header'
    'menu main'
    'menu main';

  div#side-menu {
    grid-area: menu;
  }

  div#header {
    grid-area: header;
  }

  div#main {
    grid-area: main;

    div#footer {
      width: 100%;
      height: 65px;
    }
  }
`;

export const ContentScroll = styled(Scrollbars)`
  height: 100%;
`;
