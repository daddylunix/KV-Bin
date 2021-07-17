import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";

const Create = () => {
    const userCookie = Cookies.get('token');
    const history = useHistory();
    if (!userCookie) {
        history.push('/login');
    }
    const [ response, setResponse ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ body, setBody ] = useState("");
    const config = {
        header: {
            "Content-Type":" application/json",
            Credentials: true
        },
        withCredentials: true
    }
    const createPaste = async (e) => {
        const data = await axios.post('http://localhost:5000/create', {title, body}, config);
        console.log(data);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={createPaste}>
            <input type="text" value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" value={body} placeholder="body" onChange={(e) => setBody(e.target.value)}/>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Create
