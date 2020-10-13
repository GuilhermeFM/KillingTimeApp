import styled from 'styled-components';

import background from '../../assets/background-light.jpg';

import VerticalForm from '../../components/Forms/Vertical';
import ButtonPrimaryElevated from '../../components/Buttons/ButtonPrimary/Elevated';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  background-image: url(${background});

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled(VerticalForm)`
  p#description {
    margin-bottom: 0px;
  }

  div#formbuttons {
    justify-content: center;
  }
`;

export const ButtonSignUp = styled(ButtonPrimaryElevated)`
  width: 45%;
  height: 53px;

  margin-top: 1rem;
`;
