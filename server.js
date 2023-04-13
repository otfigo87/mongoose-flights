require('dotenv').config();
const express = require('express');
const Flight = require('./models/Flight');
const connect = require('./config/database');

const app = express();
const port = 3000;
connect();











app.listen(port, (req,res) => {
    console.log(`Server is running at ${port}`)
})