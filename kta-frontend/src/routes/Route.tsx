import React from 'react';

import {
  Route as ReactRouterRoute,
  RouteProps as ReactRouterDomProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactRouterDomProps {
  component: React.ComponentType;
  isPrivate?: boolean;
}

const Route: React.FC<RouteProps> = ({
  component: Component,
  path,
  isPrivate,
}) => {
  const { token } = useAuth();
  if (isPrivate && !token) return <Redirect to="/" />;
  if (!isPrivate && token) return <Redirect to="/Dashboard" />;
  return <ReactRouterRoute path={path} render={() => <Component />} />;
};

export default Route;
