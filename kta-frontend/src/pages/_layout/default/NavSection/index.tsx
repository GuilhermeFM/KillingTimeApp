import React from 'react';

import { NavbarSection } from './styles';

interface NavbarSeactionProps {
  description: string;
}

const NavbarSeactionComponent: React.FC<NavbarSeactionProps> = ({
  description,
}) => {
  return (
    <NavbarSection>
      <h4>{description}</h4>
    </NavbarSection>
  );
};

export default NavbarSeactionComponent;
