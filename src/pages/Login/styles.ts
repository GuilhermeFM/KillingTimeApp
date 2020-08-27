import styled from 'styled-components';

import background from '../../assets/background-light.jpg';

import InputText from '../../Components/Forms/InputText';
import InputButton from '../../Components/Forms/InputButton';
import InputCheckbox from '../../Components/Forms/InputCheckbox';

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
    @media (max-width: 360px) {
      width: 300px;
    }

    @media (min-width: 480px) {
      width: 430px;
    }

    display: flex;
    flex-flow: column nowrap;

    > p:not(:last-child) {
      margin-bottom: 3rem;
      font-size: 24px;
      align-self: center;
    }

    > div {
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
  background-color: rgba(235, 237, 242, 0.4);

  :not(:first-child) {
    margin-top: 18px;
  }
`;

export const Button = styled(InputButton)`
  @media (max-width: 360px) {
    width: 100%;
  }

  align-self: center;
  margin-top: 2rem;

  :hover {
    box-shadow: 0px 9px 16px 0px rgba(93, 120, 255, 0.25);
  }
`;

export const Checkbox = styled(InputCheckbox)``;
