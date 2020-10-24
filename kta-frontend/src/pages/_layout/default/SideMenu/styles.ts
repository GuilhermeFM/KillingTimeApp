import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

export const ContentScroll = styled(Scrollbars)`
  height: 100%;
`;

export const Container = styled.div`
  height: 100%;

  > div#side-menu-header {
    height: 60px;
    background-color: #1a1a27;
  }

  > div#side-menu-content {
    height: calc(100% - 60px);
    background-color: #1e1e2d;
  }

  ul {
    padding: 15px 0;
  }
`;

export const SideMenuItem = styled.li`
  padding: 9px 25px;

  > a {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    text-decoration: none;
    color: #a2a3b7;

    > i {
      color: #494b74;
      font-size: 20px;
      margin-right: 20px;
    }

    > i#right-icon {
      font-size: 10px;
      margin-right: 0;
      margin-left: auto;
      margin-top: 2.5px;
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
