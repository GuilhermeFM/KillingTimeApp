import React, { useCallback } from 'react';
import * as FiIcon from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import { FaAngleDown, FaCircle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

import { getKeyValue } from '../../utils/objects';
import { useAuth } from '../../hooks/auth';
import { Container, AppTitle, Header, Menu, Content } from './styles';

const Layout: React.FC = ({ children }) => {
  const { user, signOut } = useAuth();
  const { pathname } = useLocation();

  const handleSignOut = useCallback(
    (e: React.BaseSyntheticEvent) => {
      e.preventDefault();
      signOut();
    },
    [signOut],
  );

  return (
    <Container>
      <AppTitle>
        <span>Killing Time App</span>
      </AppTitle>
      <Header>
        <div>
          {pathname
            .split('/')
            .filter((pathPart) => pathPart !== '')
            .map((pathPart) => (
              <div key={pathPart}>
                <FiIcon.FiChevronRight size={24} />
                <span>{pathPart}</span>
              </div>
            ))}
        </div>
        <div>
          <FiIcon.FiBell size={24} />
          <div>
            <p>{user.name}</p>
          </div>
          <img
            src={`https://api.adorable.io/avatars/48/${user.name}@adorable.png`}
            alt="Profile"
          />
        </div>
      </Header>
      <Menu>
        <ul>
          {user.menu.map((menu) => {
            const MenuIcon = getKeyValue(menu.icon)(FiIcon) as IconType;

            if (menu.items) {
              const items = menu.items.map((item) => {
                return (
                  <li key={item.url}>
                    <Link to={item.url}>
                      <FaCircle
                        size={8}
                        style={{ marginLeft: '8px', marginRight: '18px' }}
                      />
                      {item.name}
                    </Link>
                  </li>
                );
              });

              return [
                <li key={menu.name}>
                  <a href="/#" onClick={(e) => e.preventDefault()}>
                    <MenuIcon size={24} />
                    {menu.name}
                    <FaAngleDown
                      style={{
                        marginLeft: 'auto',
                        marginRight: '15px',
                        paddingTop: 2,
                      }}
                      size={22}
                    />
                  </a>
                </li>,
                ...items,
              ];
            }

            return (
              <li key={menu.url}>
                <Link to={menu.url}>
                  <MenuIcon size={24} />
                  {menu.name}
                </Link>
              </li>
            );
          })}
          <li>
            <a href="/#" onClick={handleSignOut}>
              <FiIcon.FiLogOut size={24} />
              Logout
            </a>
          </li>
        </ul>
        <p>All Rights Reserved v1.0</p>
      </Menu>
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
