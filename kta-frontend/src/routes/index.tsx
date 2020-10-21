import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import RecoverPassword from '../pages/RecoverPassword';
import ResetPassword from '../pages/ResetPassword';
import ConfirmEmail from '../pages/ConfirmEmail';
import Dashboard from '../pages/Dashboard';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={SignIn} exact />
    <Route path="/SignUp" component={SignUp} />
    <Route path="/RecoverPassword" component={RecoverPassword} />
    <Route path="/ResetPassword" component={ResetPassword} />
    <Route path="/ConfirmEmail" component={ConfirmEmail} />

    <Route path="/Dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
