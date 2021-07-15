const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
require('dotenv').config()

router.post('/register', async(req, res) => {
    const bcryptSalt = await bcrypt.genSalt(10);
    const { username, email, password } = req.body;
    const usernameExist = await User.findOne({username: username});
    const emailExist = await User.findOne({email: email});
    const hashedPassword = await bcrypt.hash(password, bcryptSalt);
    if (emailExist || usernameExist ) {
        return res.status(400).json("User already exists");
    }
    if (!username || !email || !password ) {
        return res.status(400).json('Please fill out all fields')
    }
    if (req.body.verified) {
        return res.status(400).json('404')
    } 
    try {
        const user = new User({
            username,
            email,
            password:hashedPassword
        })
        const savedUser = await user.save();
        res.status(200).json(`Successfully Registered!`)
    } catch (error) {
        res.json(error);    
    }
})

module.exports = router;