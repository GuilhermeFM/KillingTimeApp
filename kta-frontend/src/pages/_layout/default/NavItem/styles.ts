import styled, { css } from 'styled-components';

interface NavItemProps {
  depth?: number;
  selected?: boolean;
}

export const NavItem = styled.li<NavItemProps>`
  height: 48px;

  display: flex;
  flex-flow: column nowrap;

  > a {
    flex: 1;
    padding: 9px 25px;
    padding-left: ${props => (props.depth ?? 0) * 15 + 25}px;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    font-size: 13.5px;
    text-decoration: none;
    color: #a2a3b7;

    > i {
      display: flex;
      justify-content: center;

      color: #494b74;
      font-size: 20px;
      margin-right: 20px;

      > span {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        display: inline-block;

        background-color: #5c5e81;
      }
    }

    > i#right-icon {
      font-size: 9px;
      margin-right: 0;
      margin-left: auto;
      margin-top: 2px;
    }
  }

  ${props =>
    props.selected
      ? css`
          transition: background-color 0.5s;
          background-color: #1b1b28;

          > a {
            transition: color 0.5s;
            color: #ffffff;

            > i {
              transition: color 0.5s;
              color: #3699ff;

              > span {
                transition: background-color 0.5s;
                background-color: #3699ff;
              }
            }
          }
        `
      : css`
          :hover {
            transition: background-color 0.5s;
            background-color: #1b1b28;

            > a {
              transition: color 0.5s;
              color: #ffffff;

              > i {
                transition: color 0.5s;
                color: #3699ff;

                > span {
                  transition: background-color 0.5s;
                  background-color: #3699ff;
                }
              }
            }
          }
        `}
`;
