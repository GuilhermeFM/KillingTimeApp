import styled from 'styled-components';

import background from '../../assets/background-light.jpg';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  background-image: url(${background});
  background-size: contain;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  > img {
    margin-bottom: 3rem;
  }

  > p:not(:last-child) {
    margin-bottom: 3rem;
  }

  > p:not(:first-child) {
    margin-top: 3rem;
  }

  > form {
    @media (max-width: 360px) {
      width: 300px;
    }

    @media (min-width: 480px) {
      width: 430px;
    }

    display: flex;
    flex-flow: column nowrap;

    > input[type='text'] {
      padding: 1rem 1.5rem;
      border: none;
      border-radius: 5px;

      background-color: rgba(235, 237, 242, 0.4);
      :not(:first-child) {
        margin-top: 18px;
      }
    }

    > input[type='button'] {
      width: 180px;
      align-self: center;
      margin-top: 2rem;
      padding: 1rem 1.5rem;

      border: none;
      border-radius: 5px;
      background-color: #5d78ff;
      color: #fff;

      transition: all 0.3s ease;

      :hover {
        border: none;
        background-color: #3758ff;
        box-shadow: 0px 9px 16px 0px rgba(93, 120, 255, 0.25);
      }
    }

    > div {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;

      > a {
        text-decoration: none;
      }
    }
  }
`;
