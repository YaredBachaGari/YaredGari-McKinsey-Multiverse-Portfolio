const express = require('express')
const router = express.Router()
const { Comments} = require('../models')
const CommentController = require('../Controllers/CommentController')
router
  .route("/")
  .get(CommentController.getAllComments)
  .post(CommentController.createComment); 

router
  .route("/:id")
  .delete(CommentController.deleteComment)
  .get(CommentController.getOneComment);

module.exports = router