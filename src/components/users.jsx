import React, { useState } from 'react'
import api from '../api'

const Users = () => {
  api.users.fetchAll() // этим методом получим всех необходимых для нас user
  const [users, setUsers] = useState(api.users.fetchAll())

  const hanldeDelete = (userId) => {
    console.log('тут удаляем пользователя по Id')
  }

  const renderPhrase = (number) => {
    console.log('тут формируем фразу в зав-ти от кол-ва пользователей')
  }

  const badges = () => {
    return (
      <>
        <h1>
          Example heading <span class="badge bg-secondary">New</span>
        </h1>
        <h2>
          Example heading <span class="badge bg-secondary">New</span>
        </h2>
        <h3>
          Example heading <span class="badge bg-secondary">New</span>
        </h3>
        <h4>
          Example heading <span class="badge bg-secondary">New</span>
        </h4>
        <h5>
          Example heading <span class="badge bg-secondary">New</span>
        </h5>
        <h6>
          Example heading <span class="badge bg-secondary">New</span>
        </h6>
      </>
    )
  }

  return (
    <>
      <h1>Users</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Users
