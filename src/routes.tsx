import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { ScreenRegisterCostumer } from './screens/RegisterCostumer/RegisterCostumer';
import { ScreenServiceOrder } from './screens/ServiceOrder/ServiceOrder';
import PrivateRoute from './components/PrivateRoute/privateRoute';
import { ScreenDashboard } from './screens/Dashboard/Dashboard';
import { ScreenLogin } from './screens/Login/Login';

export default function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ScreenLogin} />
        <PrivateRoute path="/dashboard" exact component={ScreenDashboard} />
        <PrivateRoute path="/cadastrarcliente" exact component={ScreenRegisterCostumer} />
        <PrivateRoute path="/clientes/ordemdeservico/encontrar/:id" exact component={ScreenServiceOrder} />
      </Switch>
    </BrowserRouter>
  )
}