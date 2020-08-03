import React from 'react';
import {
  Route as ReactRouterRoute,
  RouteProps as ReactRouterDomProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';
import DefaultLayout from '../pages/_layout/default';

interface RouteProps extends ReactRouterDomProps {
  component: React.ComponentType;
  isPrivate?: boolean;
}

const Route: React.FC<RouteProps> = ({
  component: Component,
  isPrivate,
  path,
  ...rest
}) => {
  const { user } = useAuth();

  if (!user && path !== '/') {
    return (
      <ReactRouterRoute
        {...rest}
        path={path}
        render={() => <Redirect to="/" />}
      />
    );
  }

  if (user && path === '/') {
    return (
      <ReactRouterRoute
        {...rest}
        path={path}
        render={() => <Redirect to="/Dashboard" />}
      />
    );
  }

  if (isPrivate) {
    if (!user || !user.groups || user.groups.length <= 0) {
      return (
        <ReactRouterRoute
          {...rest}
          path={path}
          render={() => <Redirect to="/Error" />}
        />
      );
    }

    const hasNoPermissions = user.groups.every(
      (group) => !group.permissions || group.permissions.length <= 0,
    );

    if (hasNoPermissions) {
      return (
        <ReactRouterRoute
          {...rest}
          path={path}
          render={() => <Redirect to="/Error" />}
        />
      );
    }

    const canAccessPage =
      user.groups.findIndex((group) => {
        return (
          group.permissions.findIndex(
            (permissio) => permissio.path === path,
          ) !== -1
        );
      }) !== -1;

    if (!canAccessPage) {
      return (
        <ReactRouterRoute
          {...rest}
          path={path}
          render={() => <Redirect to="/Error" />}
        />
      );
    }
  }

  return (
    <ReactRouterRoute
      {...rest}
      path={path}
      render={() =>
        path === '/' || path === '/Error' ? (
          <Component />
        ) : (
          <DefaultLayout>
            <Component />
          </DefaultLayout>
        )
      }
    />
  );
};

export default Route;
