import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { height } from '@material-ui/system';
import { sizing } from '@material-ui/system';
import { TextareaAutosize } from '@material-ui/core';

const CreatePaste = () => {
    const [ response, setResponse ] = useState();
    const [ title, setTitle ] = useState("");
    const [ body, setBody ] = useState("");
    const userCookie = Cookies.get('token');
    const history = useHistory();
    if (!userCookie) {
        history.push('/login');
    }
    const createPaste = async (e) => {
        e.preventDefault();
        const config = {
            header: {
                "Content-Type":" application/json",
                Credentials: true
            },
            withCredentials: true
        }
        const data = await axios.post('http://localhost:5000/create', {title, body}, config);
        setResponse(data.data);
    }
    return (
        <div>
            <center>
            <h2>Create Paste</h2>
            <form onSubmit={createPaste}>
            <TextField style={{"width":"25%"}}  required type="text" id="outlined-basic" label="Title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)}/>   
            <br/><br/>
            <TextField style={{"width":"25%"}}  multiline rows={10} rowsMax={15} id="outlined-basic" label="Body" variant="outlined" value={body} onChange={(e) => setBody(e.target.value)}/>
            <br/><br/>
            <Button type="submit" variant="contained" color="primary">Create</Button>
            </form>
            {JSON.stringify(response)}
            </center>
        </div>
    )
}

export default CreatePaste
