import React from 'react'
import UserContext from '../context/UserContext';


function Profile() {
    const { userData } = React.useContext(UserContext)

    if (!userData) return <div>Please Login</div>

    return (
        <div>Hello {userData.username}</div>
    )
}

export default Profile