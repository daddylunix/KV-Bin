import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";


const CreatePaste = () => {
    const [ response, setResponse ] = useState("");
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
             <form onSubmit={createPaste}>
            <input required type="text" value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
            <input required type="text" value={body} placeholder="body" onChange={(e) => setBody(e.target.value)}/>
            <button type="submit">Submit</button>
            </form>
            {JSON.stringify(response)}
        </div>
    )
}

export default CreatePaste
