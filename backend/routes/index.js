var express = require("express");
var router = express.Router();
const users = require("./users");
const Reservation = require("./reserve");
var passport = require("passport");
var localStrategy = require("passport-local");
passport.use(new localStrategy(users.authenticate()));
var Razorpay = require("razorpay");
const crypto = require("crypto")
require("dotenv").config();
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.post("/register", (req, res, next) => {
  // const {name, email} = req.body.data;
  var newUser = {
    username: req.body.username,
    email: req.body.email,
  };
  console.log(req.body.username, req.body.email);
  users
    .register(newUser, req.body.password)
    .then((result) => {
      passport.authenticate("local")(req, res, () => {
        res.json("success");
      });
    })
    .catch((err) => {
      res.send(err);
    });
});
router.get("/register", (req, res, next) => {
  res.render("register");
});
// login
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: console.log("yess"),
    failureRedirect: console.log("no"),
  }),
  (req, res, next) => {
    console.log(req.body.username, req.body.password);
    res.json("success");
  }
);
router.get("/login", (req, res, next) => {
  res.render("login");
});
router.post("/send", function (req, res, next) {
  const { firstName, lastName, email, phone, date, time } = req.body;
  // console.log(firstName, lastName, email, phone, date, time);
  const reservation = new Reservation({
    firstName,
    lastName,
    email,
    phone,
    date,
    time,
  });
  console.log(reservation);
  reservation.save();
  res.json({ message: "Reservation received successfully" });
});
router.post("/order", async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEYID,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    const options = req.body;
    const order = await razorpay.orders.create(options);
    if (!order) {
      return res.status(500).send("error");
    }
    res.json(order);
  } catch (error) {
    console.log(error);
    return res.status(500).send("error");
  }
});
router.post('/order/validate', async (req, res) => {
  const {razorpay_order_id, razorpay_payment_id, razorpay_signature }=req.body
  const sha=crypto.createHmac("sha256",process.env.RAZORPAY_SECRET);
  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest=sha.digest("hex");
  if(digest!==razorpay_signature){
    return res.status(400).json({msg:"Transaction is not legit"})
}
res.json({
  msg:"success",
  order_id:razorpay_order_id,
    payment_id:razorpay_payment_id
})

});
module.exports = router;
