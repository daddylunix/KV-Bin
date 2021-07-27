import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from "@material-ui/core/"

const useStyles = makeStyles({
    root: {
    borderRadius:"1rem",
      minWidth:"22rem",
      maxWidth:"22rem",
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
    },
    cardShadow:{
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
    },
    btn: {
      backgroundImage:"linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376)",
      boxShadow:"0 4px 15px 0 rgba(45, 54, 65, 0.75)",
      width: "200px",
      fontSize: "16px",
      fontWeight: 600,
      color: "#fff",
      cursor: "pointer",
      margin: "20px",
      height: "55px",
      textAlign: "center",
      border: "none",
      backgroundSize: "300% 100%",
      borderRadius: "50px",
      mozTransition: "all .4s ease-in-out",
      transition: "all .4s ease-in-out",
      webkitTransition: "all .4s ease-in-out",
      "&:hover": {
        backgroundPosition: "100% 0",
        mozTransition: "all .4s ease-in-out",
        transition: "all .4s ease-in-out",
        webkitTransition: "all .4s ease-in-out",
        oTransition: "all .4s ease-in-out",
        boxShadow:"0 4px 15px 0 rgba(45, 54, 65, 0.75)"
      }
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    p: {
      marginTop:"2rem"
    }
  });

const DashboardPage = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
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
            <br/>
            <center>
            <Card className={classes.root}>
            <CardContent>
            <h1>{response.username}'s profile</h1>
            </CardContent>
            </Card>
            <br/>
            <h2>Create Paste:</h2>
            <form onSubmit={createPaste}>
            <input required type="text" value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
            <input required type="text" value={body} placeholder="body" onChange={(e) => setBody(e.target.value)}/>
            <button type="submit">Submit</button>
            </form>
            {JSON.stringify(pasteResponse.data)}
            </center>
        </div>
    )
}

export default DashboardPage
