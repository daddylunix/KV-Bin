const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()

mongoose.connect(process.env.URI, { useNewUrlParser: true}, () => {
    console.log('✨ MongoDB Connected')
})

app.listen(5000, () => {
    console.log('🚀 Server Up & Running on PORT 5000')
})