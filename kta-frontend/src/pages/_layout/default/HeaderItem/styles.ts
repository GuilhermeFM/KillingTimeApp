import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  z-index: 1;

  cursor: pointer;

  &:hover {
    border-radius: 0.42rem;
    background-color: #f3f6f9;

    transition: background-color 0.25s;
  }

  > span:first-child {
    color: #b5b5c3;

    font-size: 0.95rem;
    font-weight: 500;

    margin-right: 0.25rem;
  }

  > span:nth-child(2) {
    color: #7e8299;

    font-size: 0.75rem;
    font-weight: 600;

    margin-right: 0.95rem;
  }

  > span:nth-child(3) {
    height: 35px;
    width: 35px;

    background-color: #c9f7f5;
    color: #1bc5bd;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1rem;
    font-weight: 500;

    border-radius: 5px;
  }

  > svg {
    height: 35px;
    width: 35px;

    > g [fill] {
      fill: #3699ff;
    }
  }
`;
