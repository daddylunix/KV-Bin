import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

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
            <br/>
            <center>
            <TextField required type="text" id="outlined-basic" label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <br/><br/>
            <TextField required type="text" id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br/><br/>
            <TextField required type="password" id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) =>setPassword(e.target.value)}/>
            <br/><br/>
            <Button type="submit" variant="contained" color="primary">Register</Button>
            </center>
            </form>
            <h2>{JSON.stringify(response.data)}</h2>
        </div>
    )
}

export default Register
