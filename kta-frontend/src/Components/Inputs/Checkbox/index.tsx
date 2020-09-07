import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container, Checkbox } from './styles';

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
  const { registerField, fieldName, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'checked',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Checkbox className={className}>
        <p>{children}</p>
        <input type="checkbox" ref={inputRef} />
        <span />
      </Checkbox>
      {error && <p>{error}</p>}
    </Container>
  );
};

export default InputCheckbox;
