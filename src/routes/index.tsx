import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Error from '../pages/Error';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Login} exact />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/Error" component={Error} />
  </Switch>
);

export default Routes;
