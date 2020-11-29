import React from 'react';

import { Container } from './styles';

const Breadcumb: React.FC = () => {
  return (
    <Container>
      <h5>Tabbed Subheader</h5>
      <ul>
        <li>
          <a href="/#">Subheaders</a>
        </li>
        <li>
          <a href="/#">Classic</a>
        </li>
      </ul>
    </Container>
  );
};

export default Breadcumb;
