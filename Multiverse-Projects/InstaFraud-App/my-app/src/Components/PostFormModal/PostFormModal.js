import React, { useState } from "react";
import Avatar from "../Avatar/Avatar";
import TwitterBtn from "../TwitterBtn/TwitterBtn";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import CloseIcon from "@mui/icons-material/Close";
import "./PostFormStyle.css";
import { InstFraudContext } from "../../Context/Context";
import axios from "../../api/axios";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import jwt_decode from "jwt-decode";

function PostFormModal() {
  const { setIsTwittClicked, Auth,setPostSuccess } = React.useContext(InstFraudContext);
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState("");
  

  const axiosPrivate = useAxiosPrivate();

  const PostHandler = async (e) => {
    console.log(jwt_decode(Auth.accessToken))
    e.preventDefault();
    const loggedinUser = jwt_decode(Auth.accessToken)
    // if(!loggedinUser) navigate('/login',{state:{from:location}, replace:true}) 
    const postData = {
      PostImage: postImage,
      PostText: postText,
      UserId: loggedinUser.userInfo.UserId,
      Emojis:'😍😍😍😍😍😍😍😍😍😍😍'
    };
    try {
      const response = await axiosPrivate.post("/posts", postData);
      setPostSuccess('successfully posted')
      console.log(response);
    } catch (error) {
      console.log(error);
      //navigate('/login',{state:{from:location}, replace:true}) //if refresh token is expired the users will be booted back to login page
    }
  };

  //contentEditable="true"
  return (
    <div className="modalContainer">
      <div className="modalCardCont">
        <div className="closebtn" onClick={() => setIsTwittClicked(false)}>
          <CloseIcon id="size"/>
        </div>
        <Avatar className="namefontWeight" />
        <textarea placeholder="What is in your mind?" maxLength="250" onChange={(e)=>setPostText(e.target.value)}/>
        <input type="text" className="image-url" placeholder="Image url" onChange={(e)=>setPostImage(e.target.value)}/>
        <div className="CTA-action">
          <div className="postContol">
          <input type="file" className="file-input"/>
            <InsertPhotoOutlinedIcon />
            <EmojiEmotionsOutlinedIcon />
            <div className="twitt-btn" onClick={PostHandler}>
              <TwitterBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostFormModal;
