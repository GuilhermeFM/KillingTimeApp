import React from 'react';
import { Switch, Redirect, Route as ReactRouterRoute } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import RecoverPassword from '../pages/RecoverPassword';
import ResetPassword from '../pages/ResetPassword';
import ConfirmEmail from '../pages/ConfirmEmail';

import Layout from '../pages/_layout/default';
import Home from '../pages/Home';
import Error from '../pages/Error';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={SignIn} exact />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/RecoverPassword" component={RecoverPassword} />
      <Route path="/ResetPassword" component={ResetPassword} />
      <Route path="/ConfirmEmail" component={ConfirmEmail} />
      <ReactRouterRoute path="/404" component={Error} />

      <ReactRouterRoute>
        <Layout>
          <Switch>
            <Route path="/Home" component={Home} isPrivate />
            <Redirect to="/404" />
          </Switch>
        </Layout>
      </ReactRouterRoute>
    </Switch>
  );
};

export default Routes;
