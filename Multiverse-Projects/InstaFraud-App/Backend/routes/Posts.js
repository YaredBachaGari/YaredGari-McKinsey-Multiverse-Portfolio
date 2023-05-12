require("dotenv").config();
const express = require("express");
const router = express.Router();
const { Posts } = require("../models");
const PostController = require("../Controllers/PostController");
const RolesList = require("../config/roles_list");
const verifyRoles = require("../middlewares/VerifyRoles");

//RolesList.Admin, RolesList.premiumUsers, verifyRoles(RolesList.NormalUsers),
router
  .route("/")
  .get(PostController.getAllPosts)
  .post(PostController.createPost); // verified users only post

router
  .route("/:id")
  .delete(PostController.deletePost)
  .get(PostController.getOnePost);

module.exports = router;
