import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";
const DashboardPage = () => {
    const [ response, setResponse ] = useState("");
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
    useEffect(() => {
     getInfo()   
    })
    return (
        <div>
            <button type="button" onClick={getInfo}>Testing!</button>
            <h2>Dashboard</h2>
            <h1>Hello {response.username}</h1>
            <h2>{JSON.stringify(response)}</h2>

        </div>
    )
}

export default DashboardPage
