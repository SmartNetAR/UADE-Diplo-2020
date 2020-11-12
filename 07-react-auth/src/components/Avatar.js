import React, { useContext } from 'react'
import UserContext from './UserContext'

export default function Avatar() {
    const userData = useContext(UserContext);
    return (<>
        <span>{userData?.fullname}</span>
    </>)
}