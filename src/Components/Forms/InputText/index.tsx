import React from 'react';

import { Input } from './styles';

interface InputTextProps {
  type: 'password' | 'text';
  placeholder: string;
  className?: string;
}

const InputText: React.FC<InputTextProps> = ({
  type,
  placeholder,
  className,
}) => {
  return <Input type={type} placeholder={placeholder} className={className} />;
};

export default InputText;
