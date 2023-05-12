import React, { useEffect, useState, useRef } from "react";
import Avatar from "../Avatar/Avatar";
import "./FriendSuggestionStyle.css";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { InstFraudContext } from "../../Context/Context";
import jwtDecode from "jwt-decode";

function Suggestion() {
  const { Auth } = React.useContext(InstFraudContext);
  const loggedInUser = jwtDecode(Auth.accessToken);
  const [potentialFriends, setPotentialFriends] = useState([]);
  const [isFriend, setIsFriend] = useState(false);
  const [btnTxt, setBTnTxt] = useState({ name: "Follow", btn_id: 0 });
  const axiosPrivate = useAxiosPrivate();
  const getAllUsers = async () => {
    try {
      const response = await axiosPrivate.get("/users");
      console.log(response);
      if (!response) return;
      const suggestedFriends = response.data.filter(
        (user) => user.id !== loggedInUser.userInfo.UserId
      );
      setPotentialFriends(suggestedFriends);
    } catch (error) {
      console.log(error.message);
    }
  };

  const MakeFriend = async (selectedFriend) => {
    try {
      let txt;
      if(btnTxt.name ==='Follow'){
        txt = 'Unfollow'
      }else{
        txt = 'Follow'
      }
      setBTnTxt({ name: txt, btn_id: selectedFriend });
      const postData = {
        UserId: loggedInUser.userInfo.UserId,
        FriendId: selectedFriend,
      };
      console.log(postData);
      const response = await axiosPrivate.post("/friends", postData);
      console.log(response);
      if (!response) {
        return;
      }
      setIsFriend(!isFriend);
    } catch (error) {}
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div className="suggestion-container">
      <div className="suggestion-header">
        <p className="friends">Suggestion For You</p>
        <p>See all</p>
      </div>
      <div className="">
        {potentialFriends.map((friend, index) => {
          return (
            <div key={friend.id} className="suggested-friends">
              <Avatar
                name={`${friend.FirstName} ${friend.LastName}`}
                imageUrl={friend.AvatarImage}
                className="fontAdjuster"
              />
              <button
                className="follow-btn"
                onClick={() => MakeFriend(friend.id)}
              >
                {btnTxt.btn_id=== friend.id? btnTxt.name : "Follow"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Suggestion;
