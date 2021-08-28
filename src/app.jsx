import React, { useState } from 'react';
import Users from './components/users';
import SearchStatus from './components/searchStatus';
import api from './api'


const App = () => {

  const [users, setUsers] = useState(api.users.fetchAll())

  const hanldeDelete = (userId) => {
    const newUsers = users.filter(user => user._id !== userId)
    setUsers(newUsers)
  }

  const handleToggleBookMark = (id) => {
    const newUsers = [...users]
    const index = newUsers.findIndex(user => user._id === id)
    newUsers[index].status = !newUsers[index].status
    setUsers(newUsers)
  }


  return (
    <div>
      <SearchStatus length={users.length} />
      <Users
        users={users}
        onDelete={hanldeDelete}
        onToggleBookMark={handleToggleBookMark}
      />
    </div>
  )
}

export default App;