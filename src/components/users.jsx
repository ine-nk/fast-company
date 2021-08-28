import React from 'react'
import User from './user'



const Users = ({ users, onDelete, onToggleBookMark }) => {

  const tableHead =
    <thead>
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Профессия</th>
        <th scope="col">Качества</th>
        <th scope="col">кол-во встреч</th>
        <th scope="col">рейтинг</th>
        <th scope="col">отметка</th>
        <th scope="col"></th>
      </tr>
    </thead>

  const rows = users.map((user) => (
    <User
      key={user._id}
      {...user}
      onDelete={onDelete}
      onToggleBookMark={onToggleBookMark}
    />
  ))

  return (
    <div>{
      !!users.length && (
        <table className="table">
          {tableHead}
          <tbody>
            {rows}
          </tbody>
        </table>)}
    </div>
  )
}

export default Users
