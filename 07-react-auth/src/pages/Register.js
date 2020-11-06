import React from 'react'
import {Link} from 'react-router-dom'


function Register() {
    return (
        <div>
            <h2>Register</h2>
            <Link to="/login">Login</Link>
            <br/>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Register;