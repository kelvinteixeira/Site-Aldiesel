import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLogged } from '../../utils/Authorization/auth'

const PrivateRoute = (props: any) => isLogged() ? <Route {...props} /> : <Redirect to='/' />

export default PrivateRoute
