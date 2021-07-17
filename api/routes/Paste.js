const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const Paste = require('../models/Paste');
require('dotenv').config()
const randomstring = require('randomstring');

router.post('/create', async(req, res) => {
    const userCookie = req.cookies.token;
    const { title, body } = req.body;
    const url = await randomstring.generate(12)
    if (!userCookie) {
        res.json("Not Logged in.")
    }
    if (!title || !body) {
        return res.json("Credentials missing!")
    }
    const token = jwt.verify(userCookie, process.env.JWT)
    if (!token) {
        res.json("Not Logged in..")
    }
    try {
        const paste = new Paste({
            url,
            title,
            body,
            userId: token.id
        })
        const savedPaste = await paste.save();
        res.json(savedPaste);
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;