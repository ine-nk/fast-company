import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './components/navBar'
import Users from './layouts/users'
import Login from './layouts/login'
import Main from './layouts/main'
import NotFound from './components/not-found'
// import UserById from './components/userbyid'
// import UserById from './components/userById'
// import Table from './components/table'

// import api from './api'

const App = () => {
  return (<>
    <NavBar />
    <Switch>
      <Route path='/users/:userId?' component={ Users } />
      <Route path='/login' component={ Login } />
      <Route path="/404" component={ NotFound } />
      <Route path='/' component={ Main } />
      <Redirect to='/' />
    </Switch>
    {/* <Users /> */ }
  </>)
}

export default App
