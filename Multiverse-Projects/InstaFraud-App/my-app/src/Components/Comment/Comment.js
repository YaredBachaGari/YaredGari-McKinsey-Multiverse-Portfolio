import React, { useState, useEffect } from "react";
import Avatar from "../Avatar/Avatar";
import "./CommentStyle.css";
import { InstFraudContext } from "../../Context/Context";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";

function Comment({ className = "", postId, commentedPostId,setNumberOfComments}) {
  const { viewComment, commentSuccess } = React.useContext(InstFraudContext);
  const [AllPostComments, setAllPostComments] = useState([]);

  const axiosPrivate = useAxiosPrivate();

  const getAllComments = async () => {
    try {
      const Comments = await axiosPrivate.get("/comments");
      setAllPostComments(Comments);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getAllComments()
  }, [commentSuccess]);
 const x =AllPostComments?.data?.filter((comment) => comment.PostId === postId)
 
  if (
    AllPostComments?.data === undefined || x === null
  ) {
    return <div className={viewComment ? "commentContainer" : "commentContainer2"}></div>;
  }
  
  return (
    <div className={(commentedPostId.isviewClicked) ? "commentContainer" : "commentContainer2"}>
      {x
        ?.map((singleComment) => {
          return (
            <div key={singleComment.CommentId}>
              <Avatar
                className="namefont-comment"
                name={`${singleComment.User.FirstName} ${singleComment.User.LastName}`}
                imageUrl={singleComment.User?.AvatarImage }
              />
              <p className="commenttext"> {singleComment.CommentText}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Comment;
