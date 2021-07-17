import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory, useParams } from "react-router-dom";

const ViewPaste = () => {
    const { id } = useParams();
    const [ response, setResponse ] = useState();
    const [ url, setUrl ] = useState("");
    const getPaste = async (id) => {
        console.log(id);
        const config = {
            header: {
                "Content-Type":" application/json",
                Credentials: true
            },
            withCredentials: true
        }
        const data = await axios.get('http://localhost:5000/paste/'+id , config)
        setResponse(data.data)
    }
    useEffect(() => {
        getPaste(id);
    }, [])
    return (
        <div>
            <h1>{JSON.stringify(response)}</h1>
        </div>
    )
}

export default ViewPaste
