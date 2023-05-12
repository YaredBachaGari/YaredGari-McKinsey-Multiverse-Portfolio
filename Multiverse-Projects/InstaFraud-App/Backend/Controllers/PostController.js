const express = require("express");
const router = express.Router();
const { Posts, Users } = require("../models");
const { v4 } = require("uuid");

const getAllPosts = async (req, res) => {
  try {
    const AllPosts = await Posts.findAll({
      include: [
        {
          model: Users,
        },
      ],
    });
    res.json(AllPosts);
  } catch (error) {
    res.json(error.message);
  }
};
const getOnePost = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "Post Id is required" });
  try {
    const singlePost = await Posts.findOne({
      where: { PostId: req.params.id },
    });
    if (!singlePost)
      return res.status(204).json({ message: "No Post found..." });
    res.json(singlePost);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const createPost = async (req, res) => {
  const { PostImage, PostText, Emojis,UserId } = req.body;

  if (!PostImage && !PostText && !Emojis)
    return res.status(400).json({ error: "no content to post" });
  const UniquePostID = v4();
  try {
    const post = await Posts.create({
      PostId: UniquePostID,
      PostImage,
      PostText,
      Emojis,
      UserId
    });
    res.json(post);
  } catch (error) {
    res.json(error.message);
  }
};
const deletePost = async (req, res) => {
  if (!req?.params?.id)
    return res
      .status(400)
      .json({ error: "No Id was passed to delete the post" });
  try {
    const deletedPost = await Posts.destroy({
      where: { id: req.params.id },
    });
    if (!deletedPost)
      return res
        .status(204)
        .json({ message: "No post was found to be deleted..." });
    res.json(deletedPost);
  } catch (error) {
    res.json({ error: "no matching id is found" });
  }
};

module.exports = {
  getAllPosts,
  getOnePost,
  createPost,
  deletePost,
};
