import React, { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import { FiChevronRight, FiBell } from 'react-icons/fi';
import { FaAngleDown } from 'react-icons/fa';

import { useAuth } from '../../../hooks/auth';
import { Breadcumb, Profile } from './styles';

const Header: React.FC = () => {
  const [profileNavExpaned, setProfileNavExpaned] = useState(false);

  const { user } = useAuth();
  const { pathname } = useLocation();
  const profileIconSpring = useSpring({
    to: {
      transform: `rotate(${profileNavExpaned ? 180 : 0}deg)`,
    },
  });

  const handleExpandProfileNav = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    setProfileNavExpaned((prevState) => !prevState);
  }, []);

  return (
    <>
      <Breadcumb>
        {pathname
          .split('/')
          .filter((pathPart) => pathPart !== '')
          .map((pathPart) => (
            <div key={pathPart}>
              <FiChevronRight size={24} />
              <span>{pathPart}</span>
            </div>
          ))}
      </Breadcumb>
      <Profile>
        <FiBell size={24} />
        <img
          src={`https://api.adorable.io/avatars/36/${user.name}@adorable.png`}
          alt="Profile"
        />

        <a id="userInfo" href="/#" onClick={handleExpandProfileNav}>
          <p>{user.name}</p>
          <animated.div style={profileIconSpring}>
            <FaAngleDown size={18} color="#000" />
          </animated.div>
        </a>
      </Profile>
    </>
  );
};

export default Header;
