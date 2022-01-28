import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import CadastrarCliente from './screens/CadastrarCliente'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './screens/Dashboard'
import GerarOs from './screens/GerarOS'
import Login from './screens/Login'

export default function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/cadastrarcliente" exact component={CadastrarCliente} />
        <PrivateRoute path="/clientes/ordemdeservico/encontrar/:id" exact component={GerarOs} />
      </Switch>
    </BrowserRouter>
  )
}