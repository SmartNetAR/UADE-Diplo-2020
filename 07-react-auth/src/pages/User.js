import React from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav';

function User() {

    const {idUser} = useParams();

    return (
        <>
            <Nav />
            <h2>User {idUser}</h2>
        </>
    )
}

export default User;