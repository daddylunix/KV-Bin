const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()

// Middleware
app.use(express.json());
app.use(bodyParser.json());

// Routes 
app.use('/', require('./routes/Register'));

// Database Connection
mongoose.connect(process.env.URI, { useNewUrlParser: true}, () => {
    console.log('✨ MongoDB Connected')
})

// Start Server
app.listen(5000, () => {
    console.log('🚀 Server Up & Running on PORT 5000')
})