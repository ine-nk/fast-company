import React from 'react'
import PropTypes from 'prop-types'
import User from './user'

const UserTable = ({ users, onSort, currentSort, ...rest }) => {
  const handleSort = (item) => {
    if (currentSort.iter === item) {
      onSort({ ...currentSort, order: currentSort.order === 'asc' ? 'desc' : 'asc' })
    } else {
      onSort({ iter: item, order: 'asc' })
    }
  }

  const tableHead = (
    <thead>
      <tr>
        <th onClick={ () => handleSort('name') } scope="col">Имя</th>
        <th onClick={ () => handleSort('profession.name') } scope="col">Профессия</th>
        <th onClick={ () => handleSort() } scope="col">Качества</th>
        <th onClick={ () => handleSort('completedMeetings') } scope="col">кол-во встреч</th>
        <th onClick={ () => handleSort('rate') } scope="col">рейтинг</th>
        <th onClick={ () => handleSort('bookmark') } scope="col">отметка</th>
        <th scope="col"></th>
      </tr>
    </thead>
  )

  const rows = users.map((user) => (
    <User
      key={ user._id }
      { ...rest }
      { ...user }

    />
  ))

  return (
    <table className="table">
      { tableHead }
      <tbody>{ rows }</tbody>
    </table>)
}
UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  currentSort: PropTypes.object.isRequired
}

export default UserTable
