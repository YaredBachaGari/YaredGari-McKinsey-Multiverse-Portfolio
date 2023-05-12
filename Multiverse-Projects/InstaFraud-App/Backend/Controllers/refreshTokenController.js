const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { Users } = require("../models");

//refresh Token verify controller
const handleRefreshToken = async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.jwt) return res.sendStatus(401);
  const refreshToken = cookie.jwt;
  const anyUser = await Users.findAll({ where: { refreshToken } });
  if (!anyUser) return res.sendStatus(403); //Forbidden
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decode) => {
    if (err || anyUser.FirstName !== decode.FirstName)
      return res.sendStatus(403);
    const accessToken = jwt.sign(
      { userInfo: { username: decode.FirstName, roles: anyUser.role } },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "600s" }
    );
    res.json({ accessToken });
  });
};

module.exports = { handleRefreshToken };
