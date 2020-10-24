import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

export const ContentScroll = styled(Scrollbars)`
  height: 100%;
`;

export const Container = styled.div`
  height: 100%;

  > div#side-menu-header {
    height: 65px;
    background-color: #1a1a27;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    padding: 0 25px;

    > img:first-child {
      align-self: center;
    }

    > svg {
      height: 27px;
      width: 27px;

      > g [fill] {
        transition: fill 0.3s ease;
        fill: #494b74;
      }

      :hover {
        > g [fill] {
          fill: #3699ff;
        }
      }
    }
  }

  > div#side-menu-content {
    height: calc(100% - 65px);
    background-color: #1e1e2d;
  }

  ul {
    padding: 28px 0;
  }
`;

export const SideMenuItem = styled.li`
  padding: 9px 25px;

  > a {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    font-size: 13px;
    text-decoration: none;
    color: #a2a3b7;

    > i {
      color: #494b74;
      font-size: 17px;
      margin-right: 20px;
    }

    > i#right-icon {
      font-size: 9px;
      margin-right: 0;
      margin-left: auto;
      margin-top: 2px;
    }
  }

  :hover {
    transition: background-color 0.5s;
    background-color: #1b1b28;

    > a {
      transition: color 0.5s;
      color: #ffffff;

      > i {
        transition: color 0.5s;
        color: #3699ff;
      }
    }
  }
`;

export const SideMenuSection = styled.li`
  padding: 0 25px;
  margin-top: 20px;
  margin-bottom: 15px;

  > h4 {
    font-size: 11.7px;
    font-weight: 500;
    color: #4c4e6f;
    text-transform: uppercase;
  }
`;
