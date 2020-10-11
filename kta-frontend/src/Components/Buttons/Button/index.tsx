import React from 'react';

import Loading from '../../Loaders';
import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ loading, children, ...rest }) => {
  return <Container {...rest}>{loading ? <Loading /> : children}</Container>;
};

export default Button;
