import { fetchAll as users, getById } from './fake.api/users.api'
// import { users, getById } from './fake.api/users.api'
import professions from './fake.api/professions.api'
// import { getById } from './fake.api/users.api'

// let userId = null
getById('67rdca3eeb7f6fgeed47181r').then((data) => console.log('getById ::::::::: ', data))
// console.log('getById=============>', userId)

// users().then((data) => console.log('data ++++++++++++++', data))

const API = {
  users,
  professions,
  getById
}
export default API
