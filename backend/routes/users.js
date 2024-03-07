const mongoose = require("mongoose");
const mongodb = require("mongodb");
const plm= require('passport-local-mongoose')
const userSchema = new mongoose.Schema({
  username:String,
  email:String,
  password:String
});
mongoose
.connect("mongodb://localhost:27017/reservations")
  .then((result) => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
userSchema.plugin(plm);
module.exports = mongoose.model("users", userSchema);
