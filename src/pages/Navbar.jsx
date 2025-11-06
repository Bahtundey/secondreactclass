import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
    <h3>Home</h3>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/signin">Sign in</Link></li>
        <li><Link to="/signup">Sign up</Link></li>
    </ul>
    </nav>
  )
}

export default Navbar