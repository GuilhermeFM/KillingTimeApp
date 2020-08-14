import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';

export const NavLink = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  color: #fff;
  font-size: 18px;
  padding: 12px 0 12px 15px;
  text-decoration: none;

  :hover {
    background-color: ${shade(0.2, '#6d2ecc')};
  }

  transition: background-color 0.5s;

  > svg:first-child {
    color: #fff;
    margin-right: 15px;
  }

  > svg:not(:first-child) {
    color: #fff;
    margin-left: auto;
    margin-right: 15px;
    padding-top: 6px;
  }
`;
