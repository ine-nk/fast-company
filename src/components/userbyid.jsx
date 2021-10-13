import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import Users from './users'
import api from '../api/index'
// import User from './user.jsx'

const UserById = () => {
  const params = useParams()
  const id = params.userId
  const [user, setUser] = useState()

  console.log('=========id========', id)

  useEffect(() => {
    api.getById(id)
      .then((data) =>
        setUser(data))
  })
  console.log('getById=============> user', user)

  // const items = Object.keys(user)
  // console.log('items', items)
  return (

    <>
      { id }
      { <ul>
        { user && Object.keys(user).map(item => <li key={ item }>{ user.item }</li>) }
      </ul>
      }
    </>

  )
}

export default UserById
