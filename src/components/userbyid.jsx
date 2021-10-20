import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
// import Users from './users'
import api from '../api/index'
import QualitiesList from './qualitiesList'
// import User from './user.jsx'

const UserById = () => {
  const params = useParams()
  const history = useHistory()
  const id = params.userId
  const [user, setUser] = useState()

  console.log('=========id========', id)

  useEffect(() => {
    api.getById(id)
      .then((data) =>
        setUser(data))
  })
  console.log('getById=============> user', user)

  // const values = user && Object.values(user)
  // console.log('values', values)
  const handleReturnToUsers = () => {
    history.push('/users')
  }
  // const items = Object.keys(user)
  // console.log('items', items)
  if (user) {
    return (
      <>
        { <>
          { user && (<>
            <h2 > { user.name }</h2>
            <h3 >Профессия: { user.profession.name }</h3>
            <span > { <QualitiesList qualities={ user.qualities } /> }</span>
            <h6 >Количество встреч: { user.completedMeetings }</h6>
            <h3 >Рейтинг: { user.rate }</h3>
          </>) }
        </>
        }
        <button className='btn btn-secondary mt-2' onClick={ () => {
          handleReturnToUsers()
        } }>Все пользователи</button>
      </>
    )
  } else {
    return (
      <>
        ...Loading
      </>
    )
  }
}

export default UserById
// Object.keys(user).map(item =>
