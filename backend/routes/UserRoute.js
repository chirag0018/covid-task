require("dotenv").config();
const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");

function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET);
}

router.post("/verifyuser", (req, res) => {
  const username = req.body.userName;
  const password = req.body.password;

  db.collection("users")
    .findOne({ username, password })
    .then((user) => {
      const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET);
      return res.send({ token, msg: "success" });
    })
    .catch(() => {
      return res.send({ msg: "fail" });
    });
});

module.exports = router;
