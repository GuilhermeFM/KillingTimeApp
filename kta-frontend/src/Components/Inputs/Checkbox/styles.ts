import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  from {
    opacity: 0;
  },

  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  > p {
    color: #ff5555;
    margin-top: 5px;
    font-size: 12px;
    font-weight: 700;
  }
`;

export const Checkbox = styled.label`
  display: flex;
  align-items: center;

  height: 20px;
  position: relative;
  padding-left: 30px;

  user-select: none;
  cursor: pointer;

  input {
    position: absolute;

    opacity: 0;
    height: 0;
    width: 0;

    cursor: pointer;

    :checked ~ span {
      background-color: #5d78ff;

      :after {
        display: block;
        animation: ${fadeInOut} 0.8s forwards;
        transition: background-color 0.8s;
      }
    }
  }

  span {
    position: absolute;
    top: -1;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #eee;
    border-radius: 5px;

    :after {
      content: '';
      position: absolute;
      display: none;

      left: 6px;
      top: 4px;
      width: 3px;
      height: 6px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }
`;
