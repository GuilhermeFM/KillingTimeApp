import styled from 'styled-components';

import background from '../../assets/background-light.jpg';

import VerticalForm from '../../components/Forms/Vertical';
import InputText from '../../components/Inputs/InputText';
import InputCheckbox from '../../components/Inputs/Checkbox';
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
  div#formbuttons {
    justify-content: center;
  }
`;

export const Input = styled(InputText)`
  & + :not(:first-child) {
    margin-top: 1rem;
  }
`;

export const Button = styled(ButtonPrimaryElevated)`
  width: 50%;
  height: 53px;

  margin-top: 2rem;
`;

export const Checkbox = styled(InputCheckbox)``;
