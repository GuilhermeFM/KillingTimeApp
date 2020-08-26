import React from 'react';

import { Input } from './styles';

interface InputTextProps {
  placeholder: string;
  className?: string;
}

const InputText: React.FC<InputTextProps> = ({ placeholder, className }) => {
  return <Input type="text" placeholder={placeholder} className={className} />;
};

export default InputText;
