import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import RecoverPassword from '../pages/RecoverPassword';
import ResetPassword from '../pages/ResetPassword';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={SignIn} exact />
    <Route path="/SignUp" component={SignUp} />
    <Route path="/RecoverPassword" component={RecoverPassword} />
    <Route path="/ResetPassword" component={ResetPassword} />
  </Switch>
);

export default Routes;
