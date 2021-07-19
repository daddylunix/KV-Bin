import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Login = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ response, setResponse ] = useState("");
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
        <center>
        <form onSubmit={login}>
        <TextField required type="text" id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>   
        <br/><br/>
        <TextField required type="password" id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) =>setPassword(e.target.value)}/>
        <br/><br/>
        <Button type="submit" variant="contained" color="primary">Login</Button>
        </form>      
        <h2>{JSON.stringify(response.data)}</h2> 
        </center>
        </div>
    )
}

export default Login
