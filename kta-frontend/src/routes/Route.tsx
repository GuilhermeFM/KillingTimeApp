import React from 'react';
import {
  Route as ReactRouterRoute,
  RouteProps as ReactRouterDomProps,
} from 'react-router-dom';

interface RouteProps extends ReactRouterDomProps {
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ component: Component, path }) => {
  return <ReactRouterRoute path={path} render={() => <Component />} />;
};

export default Route;
