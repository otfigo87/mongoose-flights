const express = require("express");
const router = express.Router();
const Flight = require("../models/Flight");

router.get("/", (req, res) => {
  Flight.find()
    .sort("depart")
    .then((list) => {
      res.render("Index", { flights: list });
    })
    .catch((error) => console.log(error));
});

router.get("/new", (req, res) => {
    res.render('Form')
})

router.post("/", (req, res) => {
  console.log(req.body);
  Flight.create(req.body)
    .then((flight) => {
      // console.log(flight)
      res.redirect("/flights");
    })
    .then((error) => console.log(error));
});

router.get("/:id", (req, res) => {
  Flight.find({ airline: req.params.id })
    .then((flights) => res.render("Index", { flights: flights }))
    .catch((error) => console.log(error));
});


module.exports = router;
