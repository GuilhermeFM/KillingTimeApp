import React, { useState, useCallback } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';

import { ExpandableContainer, ExpandableItem } from './styles';

interface NavItemExpandableProps {
  name: string;
  leftIcon?(): JSX.Element;
  onClick?(e: React.BaseSyntheticEvent): void;
}

const NavItemExpandable: React.FC<NavItemExpandableProps> = ({
  name,
  leftIcon,
  onClick,
  children,
}) => {
  const [expanded, setExpanded] = useState(false);

  const expandableSpringProps = useSpring({
    to: [
      {
        height: expanded ? React.Children.count(children) * 45 : 0,
        marginBottom: expanded ? 15 : 0,
      },
      { opacity: expanded ? 1 : 0 },
    ],
    config: { duration: 250 },
  });

  const expandableIconSpringProps = useSpring({
    to: {
      transform: `rotate(${expanded ? 180 : 0}deg)`,
    },
  });

  const handleExpand = useCallback(
    (e: React.SyntheticEvent) => {
      if (onClick) {
        onClick(e);
      }

      setExpanded((prevState) => !prevState);
    },
    [onClick],
  );

  return (
    <>
      <ExpandableItem
        url="/#"
        name={name}
        leftIcon={leftIcon}
        rightIcon={() => (
          <animated.div style={expandableIconSpringProps}>
            <FaAngleDown size={18} color="#fff" />
          </animated.div>
        )}
        onClick={handleExpand}
      />
      <ExpandableContainer style={expandableSpringProps}>
        {expanded && children}
      </ExpandableContainer>
    </>
  );
};

export default NavItemExpandable;
