import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Error from '../pages/Error';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Groups from '../pages/Options/Groups';
import Users from '../pages/Options/Users';
import Permissions from '../pages/Options/Permissons';
import VersionControl from '../pages/Options/VersionControl';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Login} exact />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/options/users" component={Users} isPrivate />
    <Route path="/options/groups" component={Groups} isPrivate />
    <Route path="/options/permissions" component={Permissions} isPrivate />
    <Route
      path="/options/control/version"
      component={VersionControl}
      isPrivate
    />

    <Route path="/Error" component={Error} />
  </Switch>
);

export default Routes;
