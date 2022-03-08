import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { RegisterCostumer } from './screens/RegisterCostumer';
import PrivateRoute from './components/PrivateRoute';
import OrdemDeServico from './screens/OrdemDeServico';
import Dashboard from './screens/Dashboard';
import { ScreenLogin } from './screens/Login/Login';

export default function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ScreenLogin} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/cadastrarcliente" exact component={RegisterCostumer} />
        <PrivateRoute path="/clientes/ordemdeservico/encontrar/:id" exact component={OrdemDeServico} />
      </Switch>
    </BrowserRouter>
  )
}