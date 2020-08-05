import React, { useCallback } from 'react';

import Item from './Item';
import { useAuth } from '../../../hooks/auth';
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

  return (
    <Container>
      <ul>
        {user.menu.map((menu) => {
          if (menu.items) {
            return (
              <>
                <Item
                  hasSubmenu
                  url={menu.url}
                  icon={menu.icon}
                  name={menu.name}
                />
                <ul>
                  {menu.items.map((item) => (
                    <Item isSubmenu url={item.url} name={item.name} />
                  ))}
                </ul>
              </>
            );
          }
          return <Item icon={menu.icon} url={menu.url} name={menu.name} />;
        })}
        <Item icon="FiLogOut" name="Logout" onClick={handleSignOut} />
      </ul>
      <p>All Rights Reserved v1.0</p>
    </Container>
  );
};

export default Menu;
