import React, { useState, useEffect } from 'react'
import User from './user'
import Pagination from './pagination'
import api from '../api/index'
import GroupList from './groupList'
import SearchStatus from './searchStatus'
import _ from 'lodash'

import { paginate } from '../utils/paginate'
import { PropTypes } from 'prop-types'

const Users = ({ users: allUsers, onDelete, onToggleBookMark }) => {
  const [currentPage, setCurrentPage] = useState(1)
  // const [professions] = useState(api.professions.fetchAll())
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()
  const pageSize = 3

  useEffect(() => {
    api.professions.fetchAll().then((data) => {
      setProfessions(data)
    })
  }, [])
  console.log('from users 23 professions ===========>', professions)

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])

  //* отследим состояние наших professions и будем отображать по мере изменения

  const handleProffesionSelect = (item) => {
    console.log('item________', item)
    setSelectedProf(item)
    console.log('selectedProf====', selectedProf)
  }

  // console.log(professions)

  const handlePageChange = (pageIndex) => {
    console.log('pageIndex', pageIndex)
    setCurrentPage(pageIndex)
  }
  const filteredUsers = selectedProf
    ? allUsers.filter((user) => _.isEqual(user.profession, selectedProf))
    : allUsers

  // const filteredUsers = selectedProf ? allUsers.filter((user) => user.profession._id === selectedProf._id) : allUsers
  console.log('filter - user.profession, selectedProf ', selectedProf)
  console.log('filteredUsers: ', filteredUsers)

  const count = filteredUsers.length

  const users = paginate(filteredUsers, currentPage, pageSize)

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
      key={ user._id }
      { ...user }
      onDelete={ onDelete }
      onToggleBookMark={ onToggleBookMark }
    />
  ))
  const clearFilter = () => {
    setSelectedProf()
  }

  return (
    <div className='d-flex'>
      { professions &&
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <GroupList
            selectedItem={ selectedProf }
            items={ professions }
            onItemSelect={ handleProffesionSelect }
          />
          <button className='btn btn-secondary mt-2' onClick={ clearFilter }>Очистить</button>
        </div>
      }

      <div className="d-flex flex-column">
        <SearchStatus length={ count } />
        { !!count && (
          <table className="table">
            { tableHead }
            <tbody>{ rows }</tbody>
          </table>
        ) }
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={ count }
            pageSize={ pageSize }
            currentPage={ currentPage }
            onPageChange={ handlePageChange }
          />
        </div>
      </div>
    </div >
  )
}

Users.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  allUsers: PropTypes.array,
  users: PropTypes.array
}
export default Users
