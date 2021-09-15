import React, { useState, useEffect } from 'react'
import Pagination from './pagination'
import api from '../api/index'
import GroupList from './groupList'
import SearchStatus from './searchStatus'
import UserTable from './usersTable'
import _ from 'lodash'

import { paginate } from '../utils/paginate'
import { PropTypes } from 'prop-types'

const Users = ({ users: allUsers, currentSort, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1)
  // const [professions] = useState(api.professions.fetchAll())
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()
  // состояние порядка сортировки iter: поле по которому сортировать, order:  направление  сортировки ( asc - по возрастанию)
  const [sortBy, setSortBy] = useState({ iter: 'name', order: 'asc' })
  const pageSize = 8

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

  const handleSort = (item) => {
    setSortBy(item)
  }

  const filteredUsers = selectedProf
    ? allUsers.filter((user) => _.isEqual(user.profession, selectedProf))
    : allUsers

  // const filteredUsers = selectedProf ? allUsers.filter((user) => user.profession._id === selectedProf._id) : allUsers
  console.log('filter - user.profession, selectedProf ', selectedProf)
  console.log('filteredUsers: ', filteredUsers)

  const count = filteredUsers.length

  // сортировать будем через библиотеку lodash _.orderBy(массив_который_сортируем, [по_какому_полю_сортируем, ...], ['asc = ascending'/'desc = descending'])
  const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order])
  // и вместо  filteredUsers передаем sortedUsers
  const usersCrop = paginate(sortedUsers, currentPage, pageSize)


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
          <UserTable
            users={ usersCrop }
            onSort={ handleSort }
            currentSort={ sortBy }
            { ...rest } />
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
