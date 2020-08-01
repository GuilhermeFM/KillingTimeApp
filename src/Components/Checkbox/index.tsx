import React from 'react';

import { Container } from './styles';

const Checkbox: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
      <input type="checkbox" />
      <span />
    </Container>
  );
};

export default Checkbox;
