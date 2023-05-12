const express = require("express");
const router = express.Router();
const { Comments, Users } = require("../models");
const { v4 } = require("uuid");

const getAllComments = async (req, res) => {
  try {
    const Allcomments = await Comments.findAll({
      include: [
        {
          model: Users,
        },
      ],
    });
    res.json(Allcomments);
  } catch (error) {
    res.json(error.message);
  }
};
const getOneComment = async (req, res, next) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "Comment Id is required" });
  const singleComment = await Comments.findOne({
    where: { CommentId: req.params.id },
  });
  if (!singleComment)
    return res.status(204).json({ message: "No Comment found..." });
  res.json(singleComment);
};

const createComment = async (req, res) => {
  const { CommentText, PostId,UserId  } = req.body;

  if (!CommentText && !PostId && !UserId)
    return res.status(400).json({ error: "No content to post" });
  const UniqueCommentID = v4();
  try {
    const comment = await Comments.create({
      CommentId: UniqueCommentID,
      CommentText,
      PostId,
      UserId 
    });
    console.log(comment)
    res.json(comment);
  } catch (error) {
    res.json(error.message);
  }
};
const deleteComment = async (req, res) => {
  if (!req?.params?.id)
    return res
      .status(400)
      .json({ error: "No Id is passed to delete the user" });
  try {
    const deletedcomment = await Comments.destroy({
      where: { CommentId: req.params.id },
    });
    if (!deletedcomment)
      return res.status(204).json({ message: "No users found to be deleted." });
    res.json(deletedcomment);
  } catch (error) {
    res.json({ error: "no matching id is found" });
  }
};

module.exports = {
  getAllComments,
  getOneComment,
  createComment,
  deleteComment,
};
