const mongoose = require('mongoose');

const flightSchema = mongoose.Schema(
  {
    airline: {
      type: String,
      enum: ["American", "Delta", "United", "Southwest"],
      required: true,
    },
    flightNo: {
      type: Number,
      required: true,
      min: 10,
      max: 9999,
    },
    departs: {
      type: Date,
      required: true,
      default: Date.now, // function to get one year from date created for default date
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("Flight", flightSchema);