import styled from 'styled-components';
import { shade } from 'polished';
import NavItem from './NavItem';

export const NavItems = styled.div`
  /* set height */
  height: calc(100vh - 140px);

  /* make the menu sticky to the top when scrolling */
  position: sticky;
  top: 0px;

  /* Enable scroll when menu is to long */
  overflow-y: auto;

  /* customize scrollbar */
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.sideNavSelectedColor};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.sideNavBgColor};
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => shade(0.3, props.theme.sideNavBgColor)};
  }

  padding-top: 20px;
`;

export const ExpandableItem = styled(NavItem)`
  padding-left: 38px;

  svg {
    margin-right: 38px !important;
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
  color: ${(props) => shade(0.3, props.theme.sideNavFontColor)};
`;
