import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 265px auto;
  grid-template-rows: 65px auto;
  grid-template-areas:
    'menu header'
    'menu main'
    'menu main';

  div#side-menu {
    grid-area: menu;
  }

  div#header {
    grid-area: header;
    background-color: #fff;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;

    padding: 0px 25px;
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
