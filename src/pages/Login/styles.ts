import styled from 'styled-components';
import { shade } from 'polished';

import logo from '../../assets/login-right-image.png';

export const Container = styled.div`
  flex: 1;
  max-width: 1000px;

  display: flex;
  flex-direction: row;

  form {
    display: flex;
    flex-direction: column;

    width: 480px;
    background: #fff;
    padding: 60px;

    h1 {
      margin-bottom: 15px;
      font-weight: bold;
    }

    h4 {
      margin-bottom: 20px;
      font-weight: 50;
      color: #c9c9c9;
    }

    input {
      padding: 15px;
      border-radius: 10px;
      border: 1px solid #eee;

      & + input {
        margin-top: 15px;
      }

      ::placeholder {
        color: #c9c9c9;
      }
    }

    div:nth-of-type(1) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      margin: 20px 0 20px 0;

      > span > a {
        text-decoration: none;
        color: #6d2ecc;
        font-size: 14px;
        font-weight: bold;
        transition: color 0.2s;

        :hover {
          color: ${shade(0.2, '#f4ede8')};
        }
      }
    }

    div:nth-of-type(2) {
      display: flex;
      flex-direction: column;

      button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        padding: 10px;
        background: #fff;
        border-radius: 10px;

        > img {
          width: 24px;
          height: 24px;
          margin-right: 10px;
        }
      }

      button#google {
        margin-top: 20px;
        color: #5880c2;
        border: 1px solid #5880c2;
        transition: border-color 0.2s;

        :hover {
          border-color: ${shade(0.2, '#f4ede8')};
        }
      }

      button#facebook {
        margin-top: 10px;
        color: #4b6092;
        border: 1px solid #4b6092;
        transition: border-color 0.2s;

        :hover {
          border-color: ${shade(0.2, '#f4ede8')};
        }
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;

  max-width: 480px;
  max-height: 680px;

  background: url(${logo}) no-repeat center;
  background-size: cover;
`;
