import React, { useCallback } from 'react';
import { useTransition } from 'react-spring';

import { useAuth } from '../../../hooks/auth';

import Item from './Item';
import Expandable from './Expandable';
import { Container } from './styles';

const Menu: React.FC = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = useCallback(
    (e: React.BaseSyntheticEvent) => {
      e.preventDefault();
      signOut();
    },
    [signOut],
  );

  const menuTransition = useTransition(user.menu, (items) => items.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <Container>
      <ul>
        {menuTransition.map(({ item: menu, key, props }) => {
          if (menu.items) {
            return (
              <Expandable
                icon={menu.icon}
                name={menu.name}
                items={menu.items}
                style={props}
              />
            );
          }
          return (
            <Item
              key={key}
              style={props}
              url={menu.url}
              icon={menu.icon}
              name={menu.name}
              onClick={(e) => e.preventDefault()}
            />
          );
        })}
      </ul>
      <p>All Rights Reserved v1.0</p>
    </Container>
  );
};

export default Menu;
