import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Login = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ response, setResponse ] = useState("");
    console.log(email)
    console.log(password)
    const login = async (e) => {
        e.preventDefault();
        const config = {
            header: {
                "Content-Type":" application/json",
                Credentials: true
            },
            withCredentials: true
        }
        const data = await axios.post('http://localhost:5000/login', {email, password}, config);
        setResponse(data);
    }
    return (
        <div>
        <form onSubmit={login}>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>    
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/> 
        <button type="submit">Login</button>
        </form>      
        <h2>{JSON.stringify(response.data)}</h2> 
        </div>
    )
}

export default Login
