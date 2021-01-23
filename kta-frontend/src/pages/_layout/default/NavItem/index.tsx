import React from 'react';
import { NavItem } from './styles';

interface NavItemProps {
  description?: string;
  selected?: boolean;
  leftIcon: string;
  rightIcon?: string;
  url?: string;

  onClick?(e: React.SyntheticEvent): void;
}

const NavItemComponent: React.FC<NavItemProps> = ({
  description,
  selected,
  leftIcon,
  rightIcon,
  onClick,
}) => {
  return (
    <NavItem selected={selected}>
      <a href="/#" onClick={onClick}>
        <i id="left-icon" className={leftIcon} />
        <span>{description}</span>
        {rightIcon && <i id="left-icon" className={rightIcon} />}
      </a>
    </NavItem>
  );
};

export default NavItemComponent;
