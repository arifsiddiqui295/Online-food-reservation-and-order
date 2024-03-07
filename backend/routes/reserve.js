// reserve.js

const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  date: Date,
  time: String
});

module.exports = mongoose.model("Reservation", reservationSchema);
