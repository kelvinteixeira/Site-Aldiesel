import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Login from './screens/Login'
import Dashboard from './screens/Dashboard'
import OrdemDeServico from './screens/OrdemDeServico'
import EditOrdemDeServico from './screens/EditFormOrdemDeServico'
import GerarOs from './screens/GerarOS'
import PrivateRoute from './components/PrivateRoute'

export default function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <PrivateRoute path="/ordemdeservico" exact component={OrdemDeServico} />
        <PrivateRoute path="/dashboard" exact component ={Dashboard} />
        <PrivateRoute path="/ordemdeservicos/editar/:id" exact component={EditOrdemDeServico} />
        <PrivateRoute path="/ordemdeservicos/geraros/:id" exact component={GerarOs} />
      </Switch>
    </BrowserRouter>
  )
}