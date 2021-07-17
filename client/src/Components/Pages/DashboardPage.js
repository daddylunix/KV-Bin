import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";

const DashboardPage = () => {
    const [ response, setResponse ] = useState("");
    const [ pasteResponse, setPasteResponse ] = useState("")
    const [ title, setTitle ] = useState("");
    const [ body, setBody ] = useState("");
    const userCookie = Cookies.get('token');
    const history = useHistory();
    if (!userCookie) {
        history.push('/login');
    }
    const config = {
        header: {
            "Content-Type":" application/json",
            Credentials: true
        },
        withCredentials: true
    }
    const getInfo = async () => {
        const data = await axios.get('http://localhost:5000/dashboard', config);
        setResponse(data.data)
    }
    const createPaste = async (e) => {
        e.preventDefault();
        const data = await axios.post('http://localhost:5000/create', {title, body}, config);
        setPasteResponse(data);
    }
    useEffect(() => {
     getInfo()   
    }, [])
    return (
        <div>
            <h2>Dashboard</h2>
            <h1>Hello {response.username}</h1>
            <h2>{JSON.stringify(response)}</h2>
            <br/>
            <h2>Create Paste:</h2>
            <form onSubmit={createPaste}>
            <input required type="text" value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
            <input required type="text" value={body} placeholder="body" onChange={(e) => setBody(e.target.value)}/>
            <button type="submit">Submit</button>
            </form>
            {JSON.stringify(pasteResponse.data)}
        </div>
    )
}

export default DashboardPage
