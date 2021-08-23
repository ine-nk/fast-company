import React from 'react';
import api from '../api'




const Users = () => {
  api.users.fetchAll()  // этим методом получим всех необходимых для нас users

return ( <>
  <h1>Users</h1>
  </> )
}
 
export default Users