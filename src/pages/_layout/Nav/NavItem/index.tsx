import React from 'react';

import { NavLink } from './styles';

interface NavItemProps {
  url: string;
  name: string;
  className?: string;
  leftIcon?(): JSX.Element;
  rightIcon?(): JSX.Element;
  onClick?(e: React.BaseSyntheticEvent): void;
}

const NavItem: React.FC<NavItemProps> = ({
  url,
  name,
  className,
  leftIcon,
  rightIcon,
  onClick,
}) => {
  return (
    <NavLink to={url} onClick={onClick} className={className}>
      {leftIcon && leftIcon()}
      {name}
      {rightIcon && rightIcon()}
    </NavLink>
  );
};

export default NavItem;
