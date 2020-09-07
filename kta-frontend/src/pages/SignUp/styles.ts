import styled from 'styled-components';

import background from '../../assets/background-light.jpg';

import VerticalForm from '../../components/Forms/Vertical';
import InputText from '../../components/Inputs/InputText';
import InputCheckbox from '../../components/Inputs/Checkbox';
import ButtonLightElevated from '../../components/Buttons/ButtonLight/Elevated';
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
  div#formextracontrols {
    a {
      font-weight: 300;
      color: #74788d;
      text-decoration: underline;
    }
  }
`;

export const Input = styled(InputText)`
  & + :not(:first-child) {
    margin-top: 0.5rem;
  }
`;

export const ButtonSignUp = styled(ButtonPrimaryElevated)`
  margin-top: 1rem;
`;

export const ButtonCancel = styled(ButtonLightElevated)`
  margin-top: 1rem;
`;

export const Checkbox = styled(InputCheckbox)``;
