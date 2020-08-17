import styled from 'styled-components';

export const Breadcumb = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    align-items: center;

    > span {
      font-size: 18px;
      font-weight: bold;
      margin-right: 10px;
      text-transform: capitalize;
    }

    > svg {
      margin-right: 10px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;

  > svg {
    margin-top: 5px;
    margin-right: 30px;
  }

  a#userInfo {
    color: #000;
    display: flex;
    flex-flow: row nowrap;

    margin-left: 10px;
    margin-right: 5px;

    text-decoration: none;

    > p {
      font-size: 18px;
    }

    > div {
      width: 18px;
      height: 18px;
      margin-left: 5px;
      margin-top: 2px;
    }
  }

  > img {
    width: 36px;
    height: 36px;
    border-radius: 16px;
  }
`;
