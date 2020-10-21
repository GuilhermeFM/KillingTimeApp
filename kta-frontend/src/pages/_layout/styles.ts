import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 265px auto;
  grid-template-rows: 60px auto 80px;
  grid-template-areas:
    'header header'
    'menu content'
    'menu footer';

  border: 1px solid black;
`;

export const SideMenu = styled.div`
  grid-area: menu;

  border: 1px solid yellow;
`;

export const Header = styled.div`
  grid-area: header;

  border: 1px solid red;
`;

export const Content = styled.div`
  grid-area: content;

  border: 1px solid green;
`;

export const Footer = styled.div`
  grid-area: footer;

  border: 1px solid blue;
`;
