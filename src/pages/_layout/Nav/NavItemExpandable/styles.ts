import styled from 'styled-components';
import { animated } from 'react-spring';

import NavItem from '../NavItem';

export const ExpandableContainer = styled(animated.div)`
  height: 0;
  margin-bottom: 0;
`;

export const ExpandableItem = styled(NavItem)`
  > div {
    height: 18px;
    width: 18px;
    margin-left: auto;
    margin-right: 18px;
  }
`;
