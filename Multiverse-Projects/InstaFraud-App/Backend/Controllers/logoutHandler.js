const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { Users } = require("../models");

const handleLogout = async (req, res) => {
  const cookie = req.cookies;
  console.log(cookie);
  if (!cookie?.jwt) return res.sendstatus(204); // no response content
  const refreshToken = cookie.jwt;
  const anyUser = await Users.findOne({ where: { refreshToken } });
  // check for the existance of refresh token
  if (!anyUser) {
    res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true });
    res.sendStatus(204);
  }
  //remove resfresh token from the DataBase
  anyUser.refreshToken = "";
  const result = await Users.update(
    { refreshToken: anyUser.refreshToken },
    { where: { id: anyUser.id } }
  ); // change this syntx with sequilite to update users table with refres
  console.log(result)
  res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true }); // no need to define max age here sameSite:'strict', 'lax, 'none'
  res.sendStatus(204);
};

module.exports = { handleLogout };
