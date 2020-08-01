import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Error from '../pages/Error';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Grupos from '../pages/Administrativo/Grupos';
import Usuarios from '../pages/Administrativo/Usuarios';
import Permissoes from '../pages/Administrativo/Permissoes';
import ControleVersao from '../pages/Administrativo/ControleVersao';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Login} exact />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/administrativo/grupos" component={Grupos} isPrivate />
    <Route path="/administrativo/usuarios" component={Usuarios} isPrivate />
    <Route path="/administrativo/permissoes" component={Permissoes} isPrivate />
    <Route path="/administrativo/controle/versao" component={ControleVersao} isPrivate />

    <Route path="/Error" component={Error} />
  </Switch>
);

export default Routes;
