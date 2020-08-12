import React, { useCallback } from 'react';

import { useAuth } from '../../../hooks/auth';

import Item from './Item';
import Expandable from './Expandable';
import { NavItem, NavBottom } from './styles';

const Menu: React.FC = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = useCallback(
    (e: React.BaseSyntheticEvent) => {
      e.preventDefault();
      signOut();
    },
    [signOut],
  );

  return (
    <>
      <NavItem>
        {user.menu.map((item) => {
          if (item.items) {
            return (
              <Expandable
                icon={item.icon}
                name={item.name}
                items={item.items}
              />
            );
          }
          return (
            <Item
              key={item.id}
              url={item.url}
              icon={item.icon}
              name={item.name}
              onClick={(e) => e.preventDefault()}
            />
          );
        })}
        <Item icon="FiLogOut" name="Logout" onClick={(e) => handleSignOut(e)} />
      </NavItem>
      <NavBottom>All Rights Reserved v1.0</NavBottom>
    </>
  );
};

export default Menu;
