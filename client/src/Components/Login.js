import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
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

const Login = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
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
        <br/>
        <Card className={classes.root}>
        <CardContent>
        <Typography className={classes.title} gutterBottom>
        <h1>Login</h1>
        </Typography>
        <form onSubmit={login}>
        <TextField required type="text" id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>   
        <br/><br/>
        <TextField required type="password" id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) =>setPassword(e.target.value)}/>
        <p className={classes.p}>New Member? <Link href="/register">Sign up</Link></p>
        <Button className={classes.btn} type="submit" >Login</Button>
        </form>      
        </CardContent>
        </Card>
        <h2>{JSON.stringify(response.data)}</h2> 
        </center>
        </div>
    )
}

export default Login
