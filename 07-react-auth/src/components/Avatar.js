import React, { useContext } from 'react'
import UserContext from './UserContext';

const Avatar = () => {
    const loggedUser = useContext(UserContext);
    return (
    <span>{loggedUser?.fullname}</span>
)};

export default Avatar;