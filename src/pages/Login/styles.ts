import styled from 'styled-components';

import background from '../../assets/background-light.jpg';

import InputText from '../../Components/Forms/InputText';
import InputButton from '../../Components/Forms/InputButton';
import InputCheckbox from '../../Components/Forms/InputCheckbox';

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

    > div {
      margin-top: 2rem;

      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;

      > a {
        text-decoration: none;
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
  align-self: center;
  margin-top: 2rem;
`;

export const Checkbox = styled(InputCheckbox)``;
