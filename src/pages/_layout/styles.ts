import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  flex: 1;
  height: 100%;

  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 250px minmax(500px, 1fr);
  grid-template-areas: 'apptitle header' 'menu content';
`;

export const AppTitle = styled.div`
  grid-area: apptitle;

  color: #fff;
  padding: 20px;
  font-size: 20px;
  font-weight: 300;
  background-color: ${shade(0.2, '#6d2ecc')};

  display: flex;
  align-items: center;
`;

export const Header = styled.header`
  grid-area: header;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  width: 100%;
  padding: 0 10px 0 10px;

  /* Breadcumb */
  > div {
    display: flex;
    align-items: center;

    > div {
      display: flex;
      align-items: center;

      > span {
        font-size: 18px;
        font-weight: bold;
        margin-right: 10px;
        text-transform: capitalize;
      }

      > svg {
        margin-right: 10px;
      }
    }
  }

  /* Profile Info */
  > div:last-of-type {
    display: flex;
    align-items: center;

    > svg {
      margin-right: 30px;
    }

    > div {
      color: #000;
      display: block;
      margin-right: 15px;

      > p {
        font-size: 18px;
      }
    }

    > img {
      width: 48px;
      height: 48px;
      border-radius: 24px;
    }
  }
`;

export const Menu = styled.nav`
  grid-area: menu;

  display: flex;
  flex-flow: column nowrap;
  background-color: #6d2ecc;

  > ul {
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

    li {
      display: block;
      margin: 25px 0 0 15px;

      :hover > svg {
        color: ${shade(0.4, '#FFF')};
      }

      :hover > a {
        color: ${shade(0.4, '#FFF')};
      }

      :hover > span {
        color: ${shade(0.4, '#FFF')};
      }

      svg {
        color: #fff;
        transition: color 0.2s;
      }

      > a {
        display: flex;
        align-items: center;

        color: #fff;
        font-size: 18px;

        text-decoration: none;
        transition: color 0.2s;

        cursor: pointer;

        > svg:first-of-type {
          margin-right: 10px;
        }

        :hover > svg {
          color: ${shade(0.4, '#FFF')};
        }
      }
    }
  }

  > p {
    top: 0;
    bottom: 0px;
    position: sticky;
    align-self: center;

    font-size: 12px;
    margin-top: auto;
    padding-bottom: 20px;
    color: ${shade(0.3, '#fff')};
  }
`;

export const Content = styled.div`
  grid-area: content;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  padding: 10px;
`;
