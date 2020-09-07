import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  height: 20px;
  align-items: center;
  position: relative;
  padding-left: 30px;
  color: #c3c3c3;
  user-select: none;
  cursor: pointer;

  :hover p {
    color: #ccc;
    transition: color 0.3s;
  }

  :hover input ~ span {
    background-color: #c3c3c3;
    transition: background-color 0.3s;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  input:checked ~ span {
    background-color: #ccc;
    transition: background-color 0.3s;
  }

  input:checked ~ span:after {
    display: block;
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
    }
  }

  span:after {
    left: 6px;
    top: 4px;
    width: 3px;
    height: 6px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
