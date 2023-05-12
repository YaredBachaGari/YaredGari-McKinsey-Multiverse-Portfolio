import React from "react";
import "./postStyle.css";
import Avatar from "../Avatar/Avatar";
import { InstFraudContext } from "../../Context/Context";
import ReadMoreLess from "./../ReadMoreLess/ReadMoreLess";
import PostReaction from "../PostReaction/PostReaction";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";

function Post() {
  const {
    viewImagehandler,
    allPosts,
    setAllPosts,
    Auth,
    postSuccess,
    postDeleted,
    setPostDeleted,
  } = React.useContext(InstFraudContext);
  const axiosPrivate = useAxiosPrivate();

  const navigate = useNavigate();
  const location = useLocation();
  const userID = jwt_decode(Auth.accessToken);
  let visiblePost = allPosts.filter(
    (post) => post.UserId === userID.userInfo.UserId
  );

  if (Auth.roles === "admin") visiblePost = allPosts;

  const getAllPosts = async () => {
    try {
      const response = await axiosPrivate.get("/posts");
      setAllPosts(response.data);
      setPostDeleted(false);
    } catch (error) {
      console.log(error);
      navigate("/login", { state: { from: location }, replace: true }); //if refresh token is expired the users will be booted back to login page
    }
  };
  useEffect(() => {
    getAllPosts();
  }, [Auth, postSuccess, postDeleted]);
  console.log(visiblePost);

  const deletePostHandler = (id) => {
    try {
      const response = axiosPrivate.delete(`/posts/${id}`);
      if (!response) {
        return alert("Unable to delete the post");
      }
      setPostDeleted(true);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {visiblePost.map((post) => {
        return (
          <div className="post-card" key={post.id}>
            <Avatar
              className="namefont"
              name={`${post.User.FirstName} ${post.User.LastName}`}
              imageUrl={post.User.AvatarImage}
            />
            <div className="post-content">
              <ReadMoreLess>{post.PostText}</ReadMoreLess>
            </div>

            <img
              src={post.PostImage}
              alt=""
              className="post-image"
              onClick={() => viewImagehandler(post.id)}
            />
            <PostReaction postId={post.id} deletePost={deletePostHandler} />
          </div>
        );
      })}
    </>
  );
}
export default Post;
