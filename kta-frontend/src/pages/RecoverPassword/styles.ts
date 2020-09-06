import styled from 'styled-components';

import background from '../../assets/background-light.jpg';
import ButtonLightElevated from '../../Components/Buttons/ButtonLight/Elevated';
import ButtonPrimaryElevated from '../../Components/Buttons/ButtonPrimary/Elevated';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  background-image: url(${background});

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonRequestPassword = styled(ButtonPrimaryElevated)`
  margin-top: 1rem;
`;

export const ButtonCancel = styled(ButtonLightElevated)`
  margin-top: 1rem;
`;
