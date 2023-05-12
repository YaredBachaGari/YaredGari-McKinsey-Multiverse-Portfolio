import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import "./Nav.css";

function NavBar({ inputData }) {
  const logoutHandler = async () => {
    try {
      await axios.get('/logout')
    } catch (error) {
      console.log(error.message)
    }
  };
  return (
    <div className="nav-outercontainer">
      <div className="nav-innercontainer">
        <Link to="/dashboard">
          <div className="logo">
            <span className="insta-span">Insta</span>
            <span className="faud-span">Fraud</span>
          </div>
        </Link>
        <div className="search">
          <div className="search-input">
            <input type="text" placeholder="Search" />
            <div className="search-icon">
              <CiSearch />
            </div>
          </div>
        </div>

        <div className="logout-avatar">
          <Link to="/login">
            <button className="logout-btn" onClick={logoutHandler}>
              Logout
            </button>
          </Link>

          <Link to="/profile">
            <img
              className="avatar"
              src="https://media.istockphoto.com/photos/beautiful-successful-latin-woman-smiling-picture-id1369508766?b=1&k=20&m=1369508766&s=170667a&w=0&h=xr3pk8VTmDoC9JXzEqMPL_4jZLiyIJWUMzKrBlVQiPI="
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
