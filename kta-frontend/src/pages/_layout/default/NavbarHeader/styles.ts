import styled from 'styled-components';

export const NavbarHeader = styled.div`
  height: 65px;
  background-color: #1a1a27;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  padding: 0 25px;

  > img:first-child {
    align-self: center;
  }

  > svg {
    height: 27px;
    width: 27px;

    > g [fill] {
      transition: fill 0.3s ease;
      fill: #494b74;
    }

    :hover {
      > g [fill] {
        fill: #3699ff;
      }
    }
  }
`;
