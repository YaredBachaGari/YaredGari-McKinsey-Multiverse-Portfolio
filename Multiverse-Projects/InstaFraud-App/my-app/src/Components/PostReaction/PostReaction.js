import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { AiOutlineMessage } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { InstFraudContext } from "../../Context/Context";
import "./PostReactionStyle.css";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import jwt_decode from "jwt-decode";
import Comment from "../Comment/Comment";

function PostReaction({ postId, deletePost }) {
  const {
    likeReaction,
    setLikeReaction,
    LikeClickhandeler,
    setCommentSuccess,
    commentSuccess,
    setViewComment,
    viewComment,
    Auth,
  } = React.useContext(InstFraudContext);

  const [commentText, setCommentText] = useState("");
  const [numberOfComments, setNumberOfComments] = useState(0);
  const [commentedPostId, setCommentPostId] = useState({
    isviewClicked: false,
  });
  const [like, setLike] = useState({ amount: 200, post_id: 0, isliked: false });

  const axiosPrivate = useAxiosPrivate();

  const commentHandler = async (e) => {
    const postComment = {
      CommentText: commentText,
      PostId: postId,
      UserId: jwt_decode(Auth.accessToken).userInfo.UserId,
    };
    try {
      if (postComment.CommentText.length < 2) return alert('post text must have more than 2 character');
      await axiosPrivate.post("/comments", postComment);
      setCommentSuccess(true);
      setCommentText("");
      e.target.value=''
    } catch (error) {
      console.log(error.message);
    }
  };
  const commentViewHide = () => {
    setCommentPostId({ isviewClicked: !commentedPostId.isviewClicked });
  };
  console.log(like);

  const likeCounter = (id) => {
    setLike({ amount: 200,post_id: id, isliked: like.isliked });
    if (like.post_id === id && like.isliked) {
      setLike({ amount: (like.amount-1), isliked: !like.isliked,post_id: id });
    } else {
      setLike({ amount: (like.amount+1), isliked: !like.isliked,post_id: id });
    }
  };

  return (
    <div>
      <div className="post-reaction">
        <div className="icons">
          <FcLike onClick={() => likeCounter(postId)} />{" "}
          <span>{like.amount}</span>
        </div>
        <div className="icons" onClick={() => commentViewHide()}>
          {" "}
          <AiOutlineMessage />
          <span>30</span>
        </div>
        <div className="icons">
          <FaShareAlt />
          <span>30</span>
        </div>
        <div className="icons" onClick={() => deletePost(postId)}>
          <MdDelete />
        </div>
      </div>
      <Comment
        postId={postId}
        commentedPostId={commentedPostId}
        setNumberOfComments={setNumberOfComments}
      />
      <div id="comment-section">
        <div id="commentArea">
          <textarea
            name=""
            placeholder="Add your comment"
            onChange={(e) => setCommentText(e.target.value)}
          ></textarea>
        </div>
        <div className="post-btn">
          <button id="post-btn" onClick={commentHandler}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostReaction;
