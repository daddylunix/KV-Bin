const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config()

router.get('/dashboard', async (req, res) => {
    const userCookie = req.cookies.token
    if (!userCookie) {
        res.redirect('http://localhost:3000/login')
    }
    const token = jwt.verify(userCookie, process.env.JWT)
    if (!token) {
        res.json("nope")
    }
    try {
        const user = await User.findOne({_id: token.id});
        if(!user) {
            return res.status(401).json("User doesn't exist.")
        }
        res.json(user);
    } catch (error) {
        res.json(error)
    }
})

module.exports = router;