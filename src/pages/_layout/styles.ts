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

  svg {
    color: #00000055;
  }

  div:nth-of-type(1) {
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

  > div:nth-of-type(2) {
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

    font-size: 20px;
    font-weight: 300;

    display: flex;
    align-items: center;
  }

  > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;

    height: 100%;
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
  }
`;
