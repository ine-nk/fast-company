import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../api/index'
import QualitiesList from './qualitiesList'
import PropTypes from 'prop-types'

const userPage = ({ userId }) => {
  const history = useHistory()
  const [user, setUser] = useState()

  useEffect(() => {
    api.getById(userId)
      .then((data) =>
        setUser(data))
  })
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
userPage.propTypes = {
  userId: PropTypes.string.isRequired
}
export default userPage
// Object.keys(user).map(item =>
// почему-то при слиянии не изменлось имя файла - должно быть userById.jsx, а осталось userbaid.jsx
