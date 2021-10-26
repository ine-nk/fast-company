import React, { useState, useEffect } from 'react'
import Pagination from './pagination'
import api from '../api/index'
import GroupList from './groupList'
import SearchStatus from './searchStatus'
import UserTable from './usersTable'
import { paginate } from '../utils/paginate'
import { PropTypes } from 'prop-types'
import _ from 'lodash'
import SearchBar from './searchBar'

const Users = () => {
  console.log('from module usersList')

  // const params = useParams()
  // const { userId } = params
  const [currentPage, setCurrentPage] = useState(1)
  // const [professions] = useState(api.professions.fetchAll())
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()
  // состояние порядка сортировки iter: поле по которому сортировать, order:  направление  сортировки ( asc - по возрастанию)
  const [sortBy, setSortBy] = useState({ iter: 'name', order: 'asc' })
  const pageSize = 8

  const [users, setUsers] = useState()
  const [searchText, setSearchText] = useState('')
  // const [searchedUsers, setSearchedUsers] = useState()

  // useEffect(() => {
  //   api.users.fetchAll()
  //     .then((data) => {
  //       setUsers(data)
  //     })
  // }, [])
  // после дополнительного экспорта импорта из api

  useEffect(() => {
    api.users()
      .then((data) => {
        setUsers(data)
      })
  }, [])
  // console.log('users------------>', users)

  const hanldeDelete = (userId) => {
    const newUsers = users.filter((user) => user._id !== userId)
    setUsers(newUsers)
  }

  const handleToggleBookMark = (id) => {
    // const newUsers = [...users]
    // const index = newUsers.findIndex((user) => user._id === id)
    // newUsers[index].status = !newUsers[index].status
    // setUsers(newUsers)
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark }
        }
        return user
      })
    )
  }

  useEffect(() => {
    api.professions.fetchAll().then((data) => {
      setProfessions(data)
    })
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])

  //* отследим состояние наших professions и будем отображать по мере изменения

  const handleProffesionSelect = (item) => {
    setSelectedProf(item)
  }

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  const handleChangeSearch = ({ target }) => {
    setSearchText(() => target.value)
    console.log(searchText)
  }
  // const handleSeach = (pattern) => {
  //   console.log('pattern=> ', pattern)
  // }
  const handleSort = (item) => {
    setSortBy(item)
  }

  // if (userId) {
  //   return <UserById />
  // } else
  if (users) {
    // ================================= отсюда и до конца
    const filteredUsers = selectedProf
      ? users.filter((user) => _.isEqual(user.profession, selectedProf))
      : users

    const count = filteredUsers.length

    // сортировать будем через библиотеку lodash _.orderBy(массив_который_сортируем, [по_какому_полю_сортируем, ...], ['asc = ascending'/'desc = descending'])
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order])
    // и вместо  filteredUsers передаем sortedUsers
    const usersCrop = paginate(sortedUsers, currentPage, pageSize)

    const clearFilter = () => {
      setSelectedProf()
    }

    return (
      <div className='d-flex'>
        <>

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
            <SearchBar
              onChange={ handleChangeSearch }
              value={ searchText }
            />
            { !!count && (
              <UserTable
                users={ usersCrop }
                onSort={ handleSort }
                selectedSort={ sortBy }
                onDelete={ hanldeDelete }
                onToggleBookMark={ handleToggleBookMark }
              // { ...rest }
              />
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
        </>
      </div >
    )
  }
  // это еще из if
  return ' from usersList loading...'
}

Users.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  allUsers: PropTypes.array,
  users: PropTypes.array,
  selectedSort: PropTypes.object.isRequired,
  pattern: PropTypes.string
}
export default Users
