import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './components/navBar'
import Users from './components/users'
import Login from './components/login'
import Main from './components/main'
import NotFound from './components/not-found'
// import UserById from './components/userbyid'
// import UserById from './components/userById'
// import Table from './components/table'

// import api from './api'

const App = () => {
  return (<>
    <NavBar />
    <Switch>
      <Route path='/users/:userId?'
        component={ Users }
      // render={ (props) =>
      //   <UserById { ...props } /> }
      />
      <Route exact path='/main' component={ Main } />
      <Route path='/login' component={ Login } />
      <Route path="/404" component={ NotFound } />
      <Redirect to="/users" />
    </Switch>
    {/* <Users /> */ }
  </>)
}

export default App
