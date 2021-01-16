import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 78px;

  display: flex;
  flex-flow: row nowrap;
  align-items: baseline;

  padding: 20px 25px;

  h5 {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.2;
    margin: 3.25px 16.25px 3.25px 0;
  }

  ul {
    list-style: none;

    display: flex;
    flex-flow: row nowrap;
    margin: 0.5rem 0;
    font-size: 0.925rem;

    li {
      :not(:last-child) {
        margin-right: 0.5rem;

        :after {
          display: inline-block;
          content: ' ';
          width: 4px;
          height: 4px;
          border-radius: 4px;
          background-color: #d1d3e0;
          margin-left: 0.5rem;
          margin-bottom: 0.1rem;
        }
      }

      a {
        color: #b5b5c3;
        text-decoration: none;
      }
    }
  }
`;
