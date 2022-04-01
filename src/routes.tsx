import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { ScreenRegisterCostumer } from './screens/RegisterCostumer/RegisterCostumer';
import { ScreenServiceOrder } from './screens/ServiceOrder/ServiceOrder';
import PrivateRoute from './components/PrivateRoute/privateRoute';
import { ScreenCourtyard } from './screens/Courtyard/Courtyard';
import { ScreenLogin } from './screens/Login/Login';

export default function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ScreenLogin} />
        <PrivateRoute path="/patio" exact component={ScreenCourtyard} />
        <PrivateRoute path="/cadastrarcliente" exact component={ScreenRegisterCostumer} />
        <PrivateRoute path="/ordemdeservico/encontrar/:id" exact component={ScreenServiceOrder} />
      </Switch>
    </BrowserRouter>
  )
}