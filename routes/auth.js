const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("router level middleware");
  next();
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

module.exports = router;
