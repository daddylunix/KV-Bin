const router = require('express').Router();
const User = require('../models/User');
const Paste = require('../models/Paste');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config()

router.get('/paste/:id', async (req, res) => {
    const pasteId = req.params.id;
    try {
       const paste = await Paste.findOne({url: pasteId});
       if (!paste) {
           return res.json("Paste Not Found...")
       }
        res.json(paste);
    } catch (error) {
        res.json(error)
    }
})

module.exports = router;