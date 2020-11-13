import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function Avatar() {
    const userData = useContext(UserContext);
    return (<>
        <span>{userData?.user?.fullname}</span>
    </>)
}