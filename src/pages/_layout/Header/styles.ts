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

  > svg {
    margin-right: 30px;
  }

  > div {
    color: #000;
    display: block;
    margin-right: 15px;

    > p {
      font-size: 18px;
    }
  }

  > img {
    width: 48px;
    height: 48px;
    border-radius: 24px;
  }
`;
