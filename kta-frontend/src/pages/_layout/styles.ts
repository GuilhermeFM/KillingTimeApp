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
`;

export const SideMenu = styled.div`
  grid-area: menu;

  > div#side-menu-header {
    height: 60px;
    background-color: #1a1a27;
  }

  > div#side-menu-content {
    height: calc(100% - 60px);
    background-color: #1e1e2d;
  }
`;

export const Header = styled.div`
  grid-area: header;
  background: #fff;
`;

export const SubHeader = styled.div`
  width: 100%;
  height: 78px;

  display: flex;
  flex-flow: row nowrap;
  align-items: baseline;

  padding: 20px 25px;

  h5 {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.2;
    margin: 3.25px 16.25px 3.25px 0;
  }

  ul {
    list-style: none;

    display: flex;
    flex-flow: row nowrap;
    margin: 0.5rem 0;
    font-size: 0.925rem;

    li {
      :not(:last-child) {
        margin-right: 0.5rem;

        :after {
          display: inline-block;
          content: ' ';
          width: 4px;
          height: 4px;
          border-radius: 4px;
          background-color: #d1d3e0;
          margin-left: 0.5rem;
          margin-bottom: 0.1rem;
        }
      }

      a {
        color: #b5b5c3;
        text-decoration: none;
      }
    }
  }
`;

export const Main = styled.div`
  grid-area: content;
`;

export const ContentScroll = styled(Scrollbars)`
  height: 100%;
`;

export const Footer = styled.div`
  width: 100%;
  height: 65px;
`;
