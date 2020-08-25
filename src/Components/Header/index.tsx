import React from 'react';

import { Container } from './styles';

import logo from '../../assets/logomarca.png';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
    </Container>
  );
};

export default Header;
