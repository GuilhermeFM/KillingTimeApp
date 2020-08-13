import React from 'react';
import { useLocation } from 'react-router-dom';
import { FiChevronRight, FiBell } from 'react-icons/fi';

import { useAuth } from '../../../hooks/auth';
import { Container } from './styles';

const Header: React.FC = () => {
  const { user } = useAuth();
  const { pathname } = useLocation();

  return (
    <Container>
      <div>
        {pathname
          .split('/')
          .filter((pathPart) => pathPart !== '')
          .map((pathPart) => (
            <div key={pathPart}>
              <FiChevronRight size={24} />
              <span>{pathPart}</span>
            </div>
          ))}
      </div>
      <div>
        <FiBell size={24} />
        <div>
          <p>{user.name}</p>
        </div>
        <img
          src={`https://api.adorable.io/avatars/48/${user.name}@adorable.png`}
          alt="Profile"
        />
      </div>
    </Container>
  );
};

export default Header;
