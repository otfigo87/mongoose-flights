require('dotenv').config();
const express = require('express');
const Flight = require('./models/Flight');
const connect = require('./config/database');

const app = express();
const port = 3000;
//MD connection
connect();
//Engine config
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

app.use(express.urlencoded({ extended: false }));

//routes
app.get("/", (req, res) => {
    res.send("Home Page")
})

app.get('/flights', (req, res) => {
   Flight.find()
   .then(list => {
    res.render('Index', {flights: list})
   })
   .catch(error => console.log(error))
})

app.get('/flights/new', (req, res) => {
    res.render('Form')
})

app.post('/flights', (req, res) => {
    console.log(req.body)
    Flight.create(req.body)
    .then(flight => {
        console.log(flight)
        res.redirect('/flights')
    })
    .then(error => console.log(error))
})











app.listen(port, (req,res) => {
    console.log(`Server is running at ${port}`)
})