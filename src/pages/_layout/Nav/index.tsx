import React, { useCallback } from 'react';
import { FaCircle, FaAngleDown } from 'react-icons/fa';

import {
  FiLogOut,
  FiGrid,
  FiUsers,
  FiShoppingCart,
  FiFileText,
  FiDroplet,
  FiActivity,
  FiGitMerge,
  FiSend,
} from 'react-icons/fi';

import NavItem from './NavItem';
import NavItemExpandable from './NavItemExpandable';

import { useAuth } from '../../../hooks/auth';
import { NavItems, ExpandableItem, NavBottom } from './styles';

const Nav: React.FC = () => {
  const { signOut } = useAuth();

  const handleSignOut = useCallback(
    (e: React.BaseSyntheticEvent) => {
      e.preventDefault();
      signOut();
    },
    [signOut],
  );

  return (
    <>
      <NavItems>
        <NavItem
          url="/#"
          leftIcon={() => <FiGrid size={24} />}
          name="Dashboard"
        />

        <NavItem
          url="/#"
          leftIcon={() => <FiUsers size={24} />}
          rightIcon={() => <FaAngleDown size={24} />}
          name="Company"
        />

        <NavItemExpandable
          leftIcon={() => <FiShoppingCart size={24} />}
          onClick={(e) => e.preventDefault()}
          name="Products"
        >
          <ExpandableItem
            url="/#"
            leftIcon={() => <FaCircle size={8} />}
            name="Platforms"
          />
          <ExpandableItem
            url="/#"
            leftIcon={() => <FaCircle size={8} />}
            name="Programmers"
          />
          <ExpandableItem
            url="/#"
            leftIcon={() => <FaCircle size={8} />}
            name="Vehicle Lines"
          />
        </NavItemExpandable>

        <NavItem
          url="/#"
          leftIcon={() => <FiFileText size={24} />}
          rightIcon={() => <FaAngleDown size={24} />}
          name="Issues"
        />
        <NavItem
          url="/#"
          leftIcon={() => <FiDroplet size={24} />}
          rightIcon={() => <FaAngleDown size={24} />}
          name="Design"
        />
        <NavItem
          url="/#"
          leftIcon={() => <FiActivity size={24} />}
          rightIcon={() => <FaAngleDown size={24} />}
          name="Testing"
        />
        <NavItem
          url="/#"
          leftIcon={() => <FiGitMerge size={24} />}
          rightIcon={() => <FaAngleDown size={24} />}
          name="Development"
        />
        <NavItem
          url="/#"
          leftIcon={() => <FiSend size={24} />}
          rightIcon={() => <FaAngleDown size={24} />}
          name="Feedback"
        />
        <NavItem
          url="/#"
          leftIcon={() => <FiLogOut size={24} />}
          name="Logout"
          onClick={handleSignOut}
        />
      </NavItems>
      <NavBottom>All Rights Reserved v1.0</NavBottom>
    </>
  );
};

export default Nav;
