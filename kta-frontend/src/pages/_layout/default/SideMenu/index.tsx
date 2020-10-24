import React, { useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';

import logoLight from '../../../../assets/logo-light.png';
import angleDoubleLeft from '../../../../assets/angle-double-left.svg';

import { Container, SideMenuItem, ContentScroll } from './styles';

const SideMenu: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = useCallback(e => {
    e.preventDefault();
    setExpanded(prevState => !prevState);
  }, []);

  const expandSprings = useSpring({
    transform: `rotate(${expanded ? 90 : 0}deg)`,
    config: {
      duration: 200,
    },
  });

  return (
    <Container>
      <div id="side-menu-header">
        <img src={logoLight} alt="logo" />
        <img src={angleDoubleLeft} alt="logo_nav" />
      </div>
      <div id="side-menu-content">
        <ContentScroll>
          <ul>
            <SideMenuItem>
              <a href="/#" onClick={handleExpand}>
                <i id="left-icon" className="flaticon2-architecture-and-city" />
                <span>Dashboard</span>
                <animated.i
                  id="right-icon"
                  className="flaticon2-next"
                  style={expandSprings}
                />
              </a>
            </SideMenuItem>
            <li>
              <h4>Custom</h4>
              <i className="menu-icon ki ki-bold-more-hor icon-md" />
            </li>
          </ul>
        </ContentScroll>
      </div>
    </Container>
  );
};

export default SideMenu;
