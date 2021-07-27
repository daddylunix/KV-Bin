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
import { Link } from '@material-ui/core'

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
    p:{
      marginTop:"2rem"
    },
    pos: {
      marginBottom: 12,
    }
  });

const Register = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
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
    <center>
        <br/>
        <Card className={classes.root}>
        <CardContent>
        <Typography className={classes.title} gutterBottom>
        <h1>Register</h1>
        </Typography>
        <form onSubmit={register}>
        <center>
        <TextField required type="text" id="outlined-basic" label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <br/><br/>
        <TextField required type="text" id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <br/><br/>
        <TextField required type="password" id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) =>setPassword(e.target.value)}/>
        <p className={classes.p}>Already a user? <Link href="/login">Log In</Link></p>
        <Button type="submit" className={classes.btn}>Register</Button>
        </center>
        </form>
        </CardContent>
        </Card>
    </center>
            <h2>{JSON.stringify(response.data)}</h2>
    </div>
    )
}

export default Register
