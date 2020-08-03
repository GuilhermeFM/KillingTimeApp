import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  flex: 1;
  height: 100%;
`;

export const Header = styled.header`
  max-height: 80px;
  padding: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
  }

  div:nth-of-type(1) {
    > svg {
      margin-right: 10px;
    }
  }

  > div:nth-of-type(2) {
    > svg {
      margin-right: 30px;
    }

    > div {
      color: #000;
      display: block;
      margin-left: 15px;

      > p:nth-of-type(2) {
        font-size: 12px;
        color: #555;
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
  flex: 1;
  max-width: 250px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  min-width: 150px;

  > div:nth-of-type(1) {
    color: #fff;
    padding: 20px;
    min-height: 80px;
    background-color: ${shade(0.2, '#6d2ecc')};

    display: flex;
    align-items: center;
  }

  > div:nth-of-type(2) {
    height: 100%;
    background-color: #6d2ecc;
    padding: 20px;

    > ul {
      margin: 0;
      padding: 0;
      list-style-type: none;

      > li {
        > a {
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
`;
