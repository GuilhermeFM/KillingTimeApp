import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { IconType } from 'react-icons';
import * as FiIcon from 'react-icons/fi';
import { FaAngleDown, FaCircle } from 'react-icons/fa';

import { Container } from './styles';
import { getKeyValue } from '../../../../utils/objects';

interface ItemProps {
  isSubmenu?: boolean;
  hasSubmenu?: boolean;
  url?: string;
  icon?: string;
  name: string;

  style?: object;
  onClick?: (e: React.BaseSyntheticEvent) => void;
}

const Item: React.FC<ItemProps> = ({
  url,
  icon,
  name,
  hasSubmenu,
  isSubmenu,
  onClick,
  style,
}) => {
  const MenuItem = useMemo(() => {
    const MenuIcon = icon ? (getKeyValue(icon)(FiIcon) as IconType) : FaCircle;

    if (hasSubmenu) {
      return (
        <Container style={style}>
          <a href="/#" onClick={onClick}>
            <MenuIcon size={24} />
            {name}
            <FaAngleDown
              style={{
                marginLeft: 'auto',
                marginRight: '15px',
                paddingTop: 2,
              }}
              size={22}
            />
          </a>
        </Container>
      );
    }

    if (isSubmenu && url) {
      return (
        <Container style={style}>
          <Link to={url}>
            <FaCircle
              size={8}
              style={{ marginLeft: '8px', marginRight: '18px' }}
            />
            {name}
          </Link>
        </Container>
      );
    }

    if (url) {
      return (
        <Container style={style}>
          <Link to={url}>
            <MenuIcon size={24} />
            {name}
          </Link>
        </Container>
      );
    }

    return (
      <Container style={style}>
        <a href="/#" onClick={onClick}>
          <MenuIcon size={24} />
          {name}
        </a>
      </Container>
    );
  }, [url, icon, name, isSubmenu, hasSubmenu, style, onClick]);

  return MenuItem;
};

export default Item;
