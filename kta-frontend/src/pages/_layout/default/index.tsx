import React from 'react';

import SideMenu from './SideMenu';
import Breadcumb from './Breadcumb';
import * as HeaderItem from './HeaderItem';

import { ContentScroll, Container } from './styles';

const Default: React.FC = ({ children }) => {
  return (
    <Container>
      <div id="side-menu">
        <SideMenu
          items={[
            {
              id: 1,
              depth: 0,
              description: 'Dashboard',
              icon: 'flaticon2-architecture-and-city',
            },
            {
              id: 2,
              depth: 0,
              description: 'Custom',
              isSection: true,
            },
            {
              id: 3,
              depth: 0,
              description: 'Applications',
              icon: 'flaticon2-telegram-logo',
              subItems: [
                {
                  id: 4,
                  depth: 1,
                  description: 'Users',
                  subItems: [
                    {
                      id: 5,
                      depth: 2,
                      description: 'List - Default',
                    },
                    {
                      id: 6,
                      depth: 2,
                      description: 'List - DataTables',
                    },
                    {
                      id: 7,
                      depth: 2,
                      description: 'List - Columns 1',
                    },
                    {
                      id: 8,
                      depth: 2,
                      description: 'List - Columns 2',
                    },
                    {
                      id: 9,
                      depth: 2,
                      description: 'Add User',
                    },
                    {
                      id: 10,
                      depth: 2,
                      description: 'Edit User',
                    },
                  ],
                },
                {
                  id: 11,
                  depth: 1,
                  description: 'Profile',
                  subItems: [
                    {
                      id: 12,
                      depth: 2,
                      description: 'Profile 1',
                    },
                    {
                      id: 13,
                      depth: 2,
                      description: 'Profile 2',
                    },
                    {
                      id: 14,
                      depth: 2,
                      description: 'Profile 3',
                    },
                    {
                      id: 15,
                      depth: 2,
                      description: 'Profile 4',
                    },
                  ],
                },
              ],
            },
            {
              id: 16,
              depth: 0,
              description: 'Pages',
              icon: 'flaticon2-laptop',
              subItems: [
                {
                  id: 17,
                  depth: 1,
                  description: 'Login',
                  subItems: [
                    {
                      id: 18,
                      depth: 2,
                      description: 'Login 1',
                    },
                    {
                      id: 19,
                      depth: 2,
                      description: 'Login 2',
                    },
                    {
                      id: 20,
                      depth: 2,
                      description: 'Login 3',
                    },
                  ],
                },
                {
                  id: 21,
                  depth: 1,
                  description: 'Wizard',
                  subItems: [
                    {
                      id: 22,
                      depth: 2,
                      description: 'Wizard 1',
                    },
                    {
                      id: 23,
                      depth: 2,
                      description: 'Wizard 2',
                    },
                    {
                      id: 24,
                      depth: 2,
                      description: 'Wizard 3',
                    },
                  ],
                },
              ],
            },
          ]}
        />
      </div>
      <div id="header">
        <HeaderItem.HeaderSearchItem />
        <HeaderItem.HeaderProfileItem />
      </div>
      <div id="main">
        <ContentScroll>
          <Breadcumb />
          {children}
          <div id="footer">Footer</div>
        </ContentScroll>
      </div>
    </Container>
  );
};

export default Default;
