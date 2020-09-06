import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputCheckboxProps {
  className?: string;
  name: string;
}

const InputCheckbox: React.FC<InputCheckboxProps> = ({
  name,
  children,
  className,
}) => {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'checked',
    });
  }, [fieldName, registerField]);

  return (
    <Container className={className}>
      <p>{children}</p>
      <input type="checkbox" ref={inputRef} />
      <span />
    </Container>
  );
};

export default InputCheckbox;
