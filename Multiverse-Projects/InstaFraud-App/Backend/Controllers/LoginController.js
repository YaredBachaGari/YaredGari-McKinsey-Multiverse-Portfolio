const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { Users } = require("../models");

const LoginHandeler = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "email and password are required" });
  const subscribedUser = await Users.findOne({ where: { email } }); // check if the user exists
  if (!subscribedUser)
    return res.status(401).json({ error: "Incorrect username or password" });
  const isAMatch = await bcrypt.compare(password, subscribedUser.password); // returns a boolean
  if (isAMatch) {
    const role = subscribedUser.role;
    const accessToken = jwt.sign(
      {
        userInfo: {
          UserId: subscribedUser.id,
          username: subscribedUser.FirstName,
          roles: role,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "600s" }
    );
    const refreshToken = jwt.sign(
      { id: subscribedUser.id, username: subscribedUser.FirstName },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "24h" }
    );
    subscribedUser.refreshToken = refreshToken;
    const result = await Users.update(
      { refreshToken: refreshToken },
      { where: { id: subscribedUser.id } }
    );
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 86400,
    });
    res
      .status(200)
      .json({ Authorized: true, accessToken: accessToken, role: role });
  } else {
    res.status(401).json({ message: "something went wrong" }); //unauthorized
  }
};

module.exports = { LoginHandeler };
