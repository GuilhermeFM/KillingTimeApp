import styled from 'styled-components';

import background from '../../assets/background-light.jpg';

import InputText from '../../Components/Inputs/InputText';
import InputCheckbox from '../../Components/Inputs/Checkbox';
import ButtonPrimaryElevated from '../../Components/Buttons/ButtonPrimary/Elevated';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  background-image: url(${background});

  display: flex;
  justify-content: center;
  align-items: center;
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
