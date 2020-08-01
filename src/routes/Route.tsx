import React from 'react';
import { Route as ReactRouterRoute, RouteProps as ReactRouterDomProps, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactRouterDomProps {
  component: React.ComponentType;
  isPrivate?: boolean;
}

const Route: React.FC<RouteProps> = ({ component: Component, isPrivate, path, ...rest }) => {
  const { user } = useAuth();

  if (!isPrivate) {
    return <ReactRouterRoute {...rest} path={path} render={() => <Component />} />;
  }

  if (!user || !user.groups || user.groups.length <= 0) {
    return <ReactRouterRoute {...rest} path={path} render={() => <Redirect to="/" />} />;
  }

  const hasNoPermissions = user.groups.every((group) => !group.permissions || group.permissions.length <= 0);
  if (hasNoPermissions) {
    return <ReactRouterRoute {...rest} path={path} render={() => <Redirect to="/" />} />;
  }

  const canAccessPage =
    user.groups.findIndex((group) => {
      return group.permissions.findIndex((permission) => permission.path === path) !== -1;
    }) !== -1;

  if (canAccessPage) {
    return <ReactRouterRoute {...rest} path={path} render={() => <Component />} />;
  }

  return <ReactRouterRoute {...rest} path={path} render={() => <Redirect to="/Error" />} />;
};

export default Route;
