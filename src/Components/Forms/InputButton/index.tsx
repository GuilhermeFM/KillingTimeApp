import React, { SyntheticEvent } from 'react';

import { Input } from './styles';

interface InputButtonProps {
  value: string;
  className?: string;
  onClick?(e: SyntheticEvent): void;
}

const InputButton: React.FC<InputButtonProps> = ({
  value,
  onClick,
  className,
}) => {
  return (
    <Input
      type="button"
      value={value}
      className={className}
      onClick={onClick}
    />
  );
};

export default InputButton;
