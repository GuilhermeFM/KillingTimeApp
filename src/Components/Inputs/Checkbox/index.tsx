import React from 'react';

import { Container } from './styles';

interface InputCheckboxProps {
  className?: string;
}

const InputCheckbox: React.FC<InputCheckboxProps> = ({
  children,
  className,
}) => {
  return (
    <Container className={className}>
      <p>{children}</p>
      <input type="checkbox" />
      <span />
    </Container>
  );
};

export default InputCheckbox;
