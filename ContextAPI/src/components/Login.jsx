import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { setUserData } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUserData({ username: username })
    }
    return (
        <div>
            <input type="text" placeholder="username" value={username} onChange={(e) => {
                setUsername(e.target.value)
            }} /> {" "}
            <input type="text" placeholder="password" value={password} onChange={(e) => {
                setPassword(e.target.value)
            }} />
            <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login