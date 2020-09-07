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
    justify-content: flex-start;

    label {
      color: #74788d;

      p {
        color: #74788d;
      }
    }

    a {
      margin-left: 4px;
      margin-top: -1px;
      font-weight: 700;
      color: #74788d;
    }
  }

  p#formextracontrolsvalidation {
    color: #ff5555;
    margin-top: 5px;
    font-size: 12px;
    font-weight: 700;
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
