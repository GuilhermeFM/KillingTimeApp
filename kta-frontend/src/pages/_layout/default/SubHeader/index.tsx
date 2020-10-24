import React from 'react';

import { Container } from './styles';

const SubHeader: React.FC = () => {
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

export default SubHeader;
