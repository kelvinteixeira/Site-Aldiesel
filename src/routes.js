import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { ScreenRegisterCostumer } from './screens/RegisterCostumer/RegisterCostumer';
import PrivateRoute from './components/PrivateRoute';
import OrdemDeServico from './screens/OrdemDeServico';
import { ScreenDashboard } from './screens/Dashboard/Dashboard';
import { ScreenLogin } from './screens/Login/Login';

export default function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ScreenLogin} />
        <PrivateRoute path="/dashboard" exact component={ScreenDashboard} />
        <PrivateRoute path="/cadastrarcliente" exact component={ScreenRegisterCostumer} />
        <PrivateRoute path="/clientes/ordemdeservico/encontrar/:id" exact component={OrdemDeServico} />
      </Switch>
    </BrowserRouter>
  )
}