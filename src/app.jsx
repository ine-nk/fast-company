import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/navBar'
import Users from './components/users'
import Login from './components/login'
import Main from './components/main'
// import UserById from './components/userbyid'
import UserById from './components/userById'
// import Table from './components/table'

// import api from './api'

const App = () => {
  return (<>
    <NavBar />
    <Switch>
      <Route exact path='/main' component={ Main } />
      <Route path='/login' component={ Login } />
      <Route path='/users/:userId?'
        // component={ Table }
        render={ (props) =>
          <UserById { ...props } /> }
      />
    </Switch>
    <Users />
  </>)
}

export default App
