import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  flex: 1;
  height: 100%;

  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 250px minmax(500px, 1fr);
  grid-template-areas: 'apptitle header' 'menu content';
`;

export const AppTitle = styled.div`
  grid-area: apptitle;

  color: #fff;
  padding: 20px;
  font-size: 20px;
  font-weight: 300;
  background-color: ${shade(0.2, '#6d2ecc')};

  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  grid-area: content;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  padding: 10px;
`;
