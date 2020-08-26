import React from 'react';

import { Input } from './styles';

interface InputButtonProps {
  value: string;
  className?: string;
}

const InputButton: React.FC<InputButtonProps> = ({ value, className }) => {
  return <Input type="button" value={value} className={className} />;
};

export default InputButton;
