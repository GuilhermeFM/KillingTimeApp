import styled, { keyframes } from 'styled-components';

import background from '../../assets/background-light.jpg';

import InputText from '../../Components/Forms/InputText';
import InputCheckbox from '../../Components/Forms/InputCheckbox';
import ButtonPrimaryElevated from '../../Components/Buttons/ButtonPrimary/Elevated';

const rotateTo90 = keyframes`
  from {
    transform: translateX(-350px);
  },

  to {
    transform: translateX(0px);
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;

  background-image: url(${background});

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  > img {
    margin-bottom: 3rem;
  }

  > form {
    animation: ${rotateTo90} 1.5s forwards;

    @media (min-width: 320px) {
      width: 280px;
    }

    @media (min-width: 360px) {
      width: 300px;
    }

    @media (min-width: 400px) {
      width: 380px;
    }

    display: flex;
    flex-flow: column nowrap;

    > p:not(:last-child) {
      margin-bottom: 2rem;
      font-size: 20px;
      align-self: center;
    }

    > div#placeholder {
      margin-top: 2rem;

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

    > p:not(:first-child) {
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
  }
`;

export const Input = styled(InputText)`
  & + :not(:first-child) {
    margin-top: 1rem;
  }
`;

export const Button = styled(ButtonPrimaryElevated)`
  margin-top: 2rem;
  align-self: center;
`;

export const Checkbox = styled(InputCheckbox)``;
