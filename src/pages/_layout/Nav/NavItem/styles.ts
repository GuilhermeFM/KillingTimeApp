import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  color: #fff;
  font-size: 18px;
  padding: 12px 0 12px 30px;
  text-decoration: none;

  :hover {
    background-color: ${(props) => props.theme.sideNavSelectedColor};
    color: ${(props) => props.theme.sideNavSelectedFontColor};
  }

  transition: color 0.5s, background-color 0.5s;

  > svg:first-child {
    margin-right: 30px;
  }

  > svg:not(:first-child) {
    margin-left: auto;
    margin-right: 15px;
    padding-top: 6px;
  }
`;
