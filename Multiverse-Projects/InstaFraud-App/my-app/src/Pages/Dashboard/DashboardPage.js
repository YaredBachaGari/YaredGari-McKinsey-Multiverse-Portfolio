import React from "react";
import Post from "../../Components/Post/Post";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Suggestion from "../../Components/FriendSuggestion/Suggestion";
import Friends from "../../Components/Friends/Friends";
import TwitterBtn from "../../Components/TwitterBtn/TwitterBtn";
import PostFormModal from "../../Components/PostFormModal/PostFormModal";
import SideNavBar from "../../Components/SideNavBar/SideNavBar";
import "./DashboardStyle.css";
import { InstFraudContext } from "../../Context/Context";
import ImageViewer from "../../Components/ImageViewer/ImageViewer";
import Users from '../../Components/Users/Users'

function DashboardPage() {
  const { isTwittClicked, setIsTwittClicked, imageViewClicked } =
    React.useContext(InstFraudContext);

  return (
    <>
      <NavBar />
      <div className="dashboardcontainer">
        <div className="firstcolumn">
          <div className="fr-count">
            <Friends />
          </div>

          <div className="tiwt-btn" onClick={() => setIsTwittClicked(true)}>
            <TwitterBtn className="trail" />
          </div>
          <div className="sidemenu">
            <SideNavBar />
          </div>
        </div>
        <div className="secondColumn">
          <Post />
        </div>
        <div className="thirdColumn">
          <Suggestion />
        </div>
      </div>
      {isTwittClicked && <PostFormModal />}
      {imageViewClicked && <ImageViewer />}
      <Users/>
      <div className="dash-footer">
        <Footer />
      </div>
    </>
  );
}

export default DashboardPage;
