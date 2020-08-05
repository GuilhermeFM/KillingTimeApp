import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.li`
  display: block;
  margin: 25px 0 0 15px;

  :hover > svg {
    color: ${shade(0.4, '#FFF')};
  }

  :hover > a {
    color: ${shade(0.4, '#FFF')};
  }

  :hover > span {
    color: ${shade(0.4, '#FFF')};
  }

  svg {
    color: #fff;
    transition: color 0.2s;
  }

  > a {
    display: flex;
    align-items: center;

    color: #fff;
    font-size: 18px;

    text-decoration: none;
    transition: color 0.2s;

    cursor: pointer;

    > svg:first-of-type {
      margin-right: 10px;
    }

    :hover > svg {
      color: ${shade(0.4, '#FFF')};
    }
  }
`;
