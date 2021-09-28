import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul className="nav">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="../layouts/main.jsx">Main</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="../layouts/login.jsx">Login</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="../layouts/users.jsx">Users</Link>
  </li>
</ul>
  )
}

export default NavBar
