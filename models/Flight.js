const mongoose = require('mongoose');

const flightSchema = mongoose.Schema({
  airline: {
    type: String,
    enum: ["American", "Delta", "United", "Southwest"],
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    // default: Date.now,
  },
}, {timestamps: true});


module.exports = mongoose.model("Flight", flightSchema);