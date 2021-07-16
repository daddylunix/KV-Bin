import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Register = () => {
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ response, setResponse ] = useState("");
    const register = async (e) => {
        const config = {
            header: {
                "Content-Type":" application/json",
                Credentials: true
            },
            withCredentials: true
        }
        e.preventDefault();
        const data = await axios.post('http://localhost:5000/register', {username, email, password}, config);
        setResponse(data);
    }
    return (
        <div>
            <form onSubmit={register}>
            <input required type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input required type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input required type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Register</button>
            </form>
            <h2>{JSON.stringify(response.data)}</h2>
        </div>
    )
}

export default Register
