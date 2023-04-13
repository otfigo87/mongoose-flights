require('dotenv').config();
const express = require('express');
const Flight = require('./models/Flight');
const connect = require('./config/database');
//Router
const home = require('./routes/home');
const flights = require('./routes/flights');

const app = express();
const port = 3000;
//MD connection
connect();
//Engine config
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

app.use(express.urlencoded({ extended: false }));

//routes
app.use("/", home)
app.use('/flights', flights)
app.use("/flights/:id", flights )

app.get("*", (req, res) => {
    res.render('NotFound')
})


app.listen(port, (req,res) => {
    console.log(`Server is running at ${port}`)
})