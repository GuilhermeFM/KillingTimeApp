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
  justify-content: space-between;
  background-color: #6d2ecc;

  > ul {
    flex: 1;
    margin: 0;
    padding: 0;
    list-style-type: none;

    > li {
      display: flex;
      align-content: center;
      margin: 25px 0 0 25px;

      :hover > svg {
        color: ${shade(0.4, '#FFF')};
      }

      :hover > a {
        color: ${shade(0.4, '#FFF')};
      }

      > svg {
        color: #fff;
        margin-right: 10px;
        transition: color 0.2s;
      }

      > a {
        width: 100%;
        color: #fff;
        text-decoration: none;
        transition: color 0.2s;
        align-self: center;
      }
    }
  }

  > p {
    font-size: 12px;
    align-self: center;
    margin-bottom: 20px;
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
