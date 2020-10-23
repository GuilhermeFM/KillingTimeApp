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
    'menu content'
    'menu content';

  border: 1px solid black;
`;

export const SideMenu = styled.div`
  grid-area: menu;

  border: 1px solid yellow;
`;

export const Header = styled.div`
  grid-area: header;

  border: 1px solid red;
  background: #fff;
`;

export const SubHeader = styled.div`
  width: 100%;
  height: 78px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  padding: 20px 25px;

  h5 {
    font-size: 1.25rem;
    font-weight: 500;
    margin: 3.25px 16.25px 3.25px 0;
  }
`;

export const Main = styled.div`
  grid-area: content;

  border: 1px solid green;
`;

export const ContentScroll = styled(Scrollbars)`
  height: 100%;
`;

export const Footer = styled.div`
  width: 100%;
  height: 65px;

  border: 1px solid blue;
`;
