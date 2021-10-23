import React from 'react'
import { useParams } from 'react-router'
import UserPage from '../components/userPage'
import UsersList from '../components/usersList'

const Users = () => {
  const params = useParams()
  const { userId } = params
  console.log('users >> userId from params', userId)
  return <>
    { userId ? <UserPage userId={ userId } /> : <UsersList /> }
  </>
}

export default Users
