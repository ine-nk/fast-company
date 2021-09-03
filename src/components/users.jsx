import React, { useState } from 'react'
import User from './user'
import Pagination from './pagination'
import { paginate } from '../utils/paginate'
import { PropTypes } from 'prop-types'

const Users = ({ users: allUsers, onDelete, onToggleBookMark }) => {
  const count = allUsers.length
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 4
  const handlePageChange = (pageIndex) => {
    console.log('pageIndex', pageIndex)
    setCurrentPage(pageIndex)
  }

  const users = paginate(allUsers, currentPage, pageSize)

  const tableHead = (
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
  )

  const rows = users.map((user) => (
    <User
      key={user._id}
      {...user}
      onDelete={onDelete}
      onToggleBookMark={onToggleBookMark}
    />
  ))

  return (
    <div>
      {!!count && (
        <table className="table">
          {tableHead}
          <tbody>{rows}</tbody>
        </table>
      )}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

Users.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  allUsers: PropTypes.array,
  users: PropTypes.array
}
export default Users
