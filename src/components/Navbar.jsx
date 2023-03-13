import React from 'react'
import {Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
    <ul>
      <li>
        <Link to='/landing'>Landing</Link>
      </li>
      <li>
        <Link to='/home'>home</Link>
      </li>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      <li>
        <Link to='/analytics'>Analytics</Link>
      </li>
      <li>
        <Link to='/admin'>Admin</Link>
      </li>
    </ul>
  </nav>
  )
}
