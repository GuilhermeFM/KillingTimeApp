import React, { useState, useCallback } from 'react';
import { useTransition } from 'react-spring';

import Item from '../Item';

interface ExpandableProps {
  name: string;
  icon: string;
  style?: object;
  items: ExpandableItems[];
}

interface ExpandableItems {
  id: number;
  name: string;
  icon: string;
  url: string;
}

const Expandable: React.FC<ExpandableProps> = ({
  name,
  icon,
  items,
  style,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [expandableItems, setExpandableItems] = useState<ExpandableItems[]>(
    [] as ExpandableItems[],
  );

  const handleExpandMenu = useCallback(
    (e: React.BaseSyntheticEvent) => {
      e.preventDefault();

      if (expanded) {
        setExpandableItems([]);
      } else {
        setExpandableItems(items);
      }

      setExpanded(!expanded);
    },
    [expanded, items],
  );

  const transition = useTransition(expandableItems, (item) => item.id, {
    from: { opacity: 0, height: 0, marginTop: 0 },
    enter: { opacity: 1, height: 25, marginTop: 25 },
    leave: { opacity: 0, height: 0, marginTop: 0 },
    config: {
      duration: 250,
    },
  });

  return (
    <>
      <Item
        hasSubmenu
        style={style}
        icon={icon}
        name={name}
        onClick={(e) => handleExpandMenu(e)}
      />
      {transition.map(({ item, key, props }) => (
        <Item
          isSubmenu
          key={key}
          url={item.url}
          name={item.name}
          style={props}
        />
      ))}
    </>
  );
};

export default Expandable;
