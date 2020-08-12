import styled from 'styled-components';
import { shade } from 'polished';

export const NavItem = styled.ul`
  /* set max height */
  max-height: calc(100vh - 140px);

  /* make the menu sticky to the top when scrolling */
  position: sticky;
  top: 0px;

  margin: 0;
  padding: 0;
  list-style-type: none;

  /* Enable scroll when menu is to long */
  overflow-y: auto;

  /* customize scrollbar */
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #6d2ecc;
  }
  ::-webkit-scrollbar-thumb {
    background: ${shade(0.2, '#6d2ecc')};
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${shade(0.3, '#6d2ecc')};
  }
`;

export const NavBottom = styled.p`
  top: 0;
  bottom: 0px;
  position: sticky;
  align-self: center;

  font-size: 12px;
  margin-top: auto;
  padding-bottom: 20px;
  color: ${shade(0.3, '#fff')};
`;
