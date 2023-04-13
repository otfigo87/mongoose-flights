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
    res.render('Home')
})

app.get('/flights', (req, res) => {
   Flight.find().sort("depart")
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
        // console.log(flight)
        res.redirect('/flights')
    })
    .then(error => console.log(error))
})

app.get("/flights/:id", (req, res) => {
    Flight.find({airline: req.params.id})
    .then(flights => res.render('Index', {flights:flights}))
    .catch(error => console.log(error))
})

app.get("*", (req, res) => {
    res.render('NotFound')
})



app.listen(port, (req,res) => {
    console.log(`Server is running at ${port}`)
})