import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.button)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  padding: 1rem 1.5rem;

  border: none;
  border-radius: 5px;

  transition: all 0.3s ease;
`;
