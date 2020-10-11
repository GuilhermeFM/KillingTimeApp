import styled from 'styled-components';

import background from '../../assets/background-light.jpg';
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

export const ButtonRequestPassword = styled(ButtonPrimaryElevated)`
  width: 45%;
  height: 53px;
  margin-top: 1rem;
`;

export const ButtonCancel = styled(ButtonLightElevated)`
  width: 45%;
  height: 53px;
  margin-top: 1rem;
`;
