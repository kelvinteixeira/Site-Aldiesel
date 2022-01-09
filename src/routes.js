import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import EditOrdemDeServico from './screens/EditFormOrdemDeServico'
import CadastrarCliente from './screens/CadastrarCliente'
import OrdemDeServico from './screens/OrdemDeServico'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './screens/Dashboard'
import GerarOs from './screens/GerarOS'
import Login from './screens/Login'

export default function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/ordemdeservico" exact component={OrdemDeServico} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/cadastrarcliente" exact component={CadastrarCliente} />
        <PrivateRoute path="/ordemdeservicos/editar/:id" exact component={EditOrdemDeServico} />
        <PrivateRoute path="/ordemdeservicos/geraros/:id" exact component={GerarOs} />
      </Switch>
    </BrowserRouter>
  )
}