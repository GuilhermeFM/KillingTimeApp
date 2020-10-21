import React from 'react';
import {
  Route as ReactRouterRoute,
  RouteProps as ReactRouterDomProps,
} from 'react-router-dom';

import Layout from '../pages/_layout/default';

interface RouteProps extends ReactRouterDomProps {
  component: React.ComponentType;
  isPrivate?: boolean;
}

const Route: React.FC<RouteProps> = ({
  component: Component,
  path,
  isPrivate,
}) => {
  if (isPrivate) {
    return (
      <ReactRouterRoute
        path={path}
        render={() => (
          <Layout>
            <Component />
          </Layout>
        )}
      />
    );
  }

  return <ReactRouterRoute path={path} render={() => <Component />} />;
};

export default Route;
