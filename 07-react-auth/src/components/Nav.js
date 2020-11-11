import React from 'react'
import {Link} from 'react-router-dom'
import Avatar from './Avatar';

function Nav() {
    return(
    <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/register">Register</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
        <li>
            <Avatar />
        </li>
        </ul>
  </nav>)
}

export default Nav;