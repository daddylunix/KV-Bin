const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config()

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.json("Credentials missing!")
    }
    const emailExists = await User.findOne({ email: email });
    if (!emailExists) { 
        return res.json(`User doesn't exist!`)
    }
    else {
        try {
            const user = await User.findOne({email: email});
            if (!user) {
                return res.json(`User doesn't exist!`)
            }
            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                return res.json("Invalid Credentials");
            }
            const token = jwt.sign({id: user._id}, process.env.JWT)
            res.cookie('token', token).status(200).json("Successfully Logged in");
        } catch (error) {
            res.json(error);
            console.log(error);
        }
    }
})

module.exports = router;