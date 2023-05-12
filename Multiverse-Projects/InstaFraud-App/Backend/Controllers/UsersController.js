const express = require("express");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { Users } = require("../models");
const { v4 } = require("uuid");

const getAllUsers = async (req, res, next) => {
  const allUsers = await Users.findAll();
  if (!allUsers)
    return res
      .status(204)
      .json({ message: "No users found please try again..." });
  res.json(allUsers);
};

const getOneUser = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "User Id is required" });
  const singleUser = await Users.findOne({ where: { UserId: req.params.id } });
  if (!singleUser)
    return res.status(204).json({ message: "No users found..." });
  res.json(singleUser);
};

const createNewUser = async (req, res, next) => {
  const { FirstName, LastName, email, password, AvatarImage } = req.body;
  if (!FirstName || !LastName || !email || !password)
    return res.status(400).json({
      message: "full name along with email and password are required",
    });
  const anyUsers = await Users.findAll({ where: { email: email } }); // check for duplicate
  if (anyUsers.length > 0)
    return res.status(409).send("This user already exist");
  try {
    const UniqueId = v4();
    const bcryptedpassword = await bcrypt.hash(password, 10); // encrypt( hash and salt) the password
    const newUser = await Users.create({
      UserId: UniqueId,
      FirstName,
      LastName,
      AvatarImage,
      email,
      password: bcryptedpassword,
      refreshToken: "",
    });
    const token = jwt.sign(
      { id: newUser.id, username: newUser.FirstName },
      process.env.ACCESS_TOKEN_SECRET
    );
    res
      .status(200)
      .json({ Success: "successfully registered", accessToken: token });
  } catch (error) {
    res.send(error.message);
    res.json({ error: error.message });
  }
};

const UpdateUser = async (req, res, next) => {
  const { FirstName, LastName, password, email, AvatarImage } = req?.body;
 
  if (!req?.params?.id)
    return res
      .status(400)
      .json({ message: "Users ID is required to update user.." });
  const userToBeUpdated = await Users.findOne({
    where: { id: req?.params?.id },
  });
  
  if (!userToBeUpdated)
    return res.status(204).json({ message: "No user matches a given Id" });
  try {
    if (FirstName) userToBeUpdated.FirstName = FirstName;
    if (LastName) userToBeUpdated.LastName = LastName;
    if (password)
      userToBeUpdated.password = await bcrypt.hash(password, 10);
    if (email) userToBeUpdated.email = email;
    if (AvatarImage) userToBeUpdated.AvatarImage = AvatarImage;
    console.log(userToBeUpdated)
    const updatedUser = await Users.update({"FirstName":userToBeUpdated.FirstName, "LastName":userToBeUpdated.LastName, "email":userToBeUpdated.email,"password":userToBeUpdated.password, "AvatarImage":userToBeUpdated.AvatarImage}, {
      where: { id: req.params.id },
    });
    res.json(updatedUser);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const DeleteUser = async (req, res, next) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "Users ID is not found.." });
  const userToBeDeleted = await Users.findOne({ where: { UserId: req.params.id } });
  if (!userToBeDeleted)
    return res.status(204).json({ message: "No user matches a given Id" });

  const DeletedUser = await Users.destroy({
    where: { id: userToBeDeleted.id },
  });
  res.json(DeletedUser);
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  UpdateUser,
  DeleteUser,
};
