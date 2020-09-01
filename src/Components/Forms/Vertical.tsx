import styled, { keyframes } from 'styled-components';
import { Form } from '@unform/web';

const translateX = keyframes`
  from {
    transform: translateX(-350px);
  },

  to {
    transform: translateX(0px);
  }
`;

export const Vertical = styled(Form)`
  @media (min-width: 320px) {
    width: 280px;
  }

  @media (min-width: 360px) {
    width: 300px;
  }

  @media (min-width: 400px) {
    width: 380px;
  }

  animation: ${translateX} 1.5s forwards;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  img#logo {
    width: 66px;
    height: 44px;
    align-self: center;
    margin-bottom: 1.5rem;
  }

  p#title {
    margin-bottom: 1.5rem;
    font-size: 20px;
    align-self: center;
  }

  p#description {
    align-self: center;
    font-size: 14px;
    margin-bottom: 2rem;
    color: #74788d;
  }

  div#formextracontrols {
    margin-top: 1.5rem;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    > a {
      color: #c3c3c3;
      text-decoration: none;
      cursor: pointer;

      transition: all 0.3s ease;

      :hover {
        color: #5d78ff;
      }
    }
  }

  div#formbuttons {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;

    margin-top: 1rem;
  }

  p#footer {
    align-self: center;
    margin-top: 3rem;

    > a {
      color: #000;
      font-weight: bold;
      text-decoration: none;
      cursor: pointer;

      transition: all 0.3s ease;

      :hover {
        color: #5d78ff;
      }
    }
  }
`;

export default Vertical;
