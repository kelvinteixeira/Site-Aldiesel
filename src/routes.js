import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Dashboard from './screens/Dashboard'
import OrdemDeServico from './screens/OrdemDeServico'
import Login from './screens/Login'
import PrivateRoute from './components/PrivateRoute'

export default function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <PrivateRoute path="/ordemdeservico" exact component={OrdemDeServico} />
        <PrivateRoute path="/dashboard" exact component ={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}