import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  flex: 1;
  height: 100%;

  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 250px minmax(500px, 1fr);
  grid-template-areas: 'apptitle header' 'menu content';

  > div#AppTitle {
    grid-area: apptitle;

    color: #fff;
    padding: 20px;
    font-size: 20px;
    font-weight: 300;
    background-color: ${shade(0.2, '#6d2ecc')};

    display: flex;
    align-items: center;
  }

  > header {
    grid-area: header;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    width: 100%;
    padding: 0 10px 0 10px;
  }

  > nav {
    grid-area: menu;

    display: flex;
    flex-flow: column nowrap;
    background-color: #6d2ecc;
  }

  > div#Content {
    grid-area: content;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    padding: 10px;
  }
`;
