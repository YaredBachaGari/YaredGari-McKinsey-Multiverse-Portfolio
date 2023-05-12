import React, { useState, useRef, useEffect } from "react";
import "./LoginStyle.css";
import SignUp from "../SignUp/SignUp";
//import { InstFraudContext } from '../../Context/Context'
import useAuth from "../../Hooks/useAuth";
import axios from "../../api/axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const { setAuth } = useAuth();

  //if some one attempter to access dashboard but not logged in, we will first redirect them back to login then return them where they were
  const navigate = useNavigate();
  const location = useLocation;
  const from = location?.state?.from?.pathname || "/dashboard"; // the user signed in either take them where asked to route them before login or dashboard

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/login",
        JSON.stringify({ email: user, password: password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response?.data.accessToken;
      console.log(accessToken);
      const roles = response?.data.role;
      setAuth({ user, password, accessToken, roles }); // saving response in memory than in a local storage or cookie
      setUser(""); //clearing input field
      setPassword(""); //clearing input field
      navigate(from, { replace: true });
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No server response ");
      } else if (error?.response?.status === 400) {
        setErrMsg("Missing UserName or Password ");
      } else if (error?.response?.status === 401) {
        setErrMsg("UnAuthorized ");
      } else {
        setErrMsg("Login failed ");
      }
      userRef.current.focus();
    }
  };
  console.log();
  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  return (
    <>
      <form className="signin-form">
        <h1>Sign In</h1>
        <p
          ref={errRef}
          className={errMsg ? "errMsg" : "offScreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <div className="input username">
          <input
            type="text"
            ref={userRef}
            onChange={(e) => setUser(e.target.value)}
            placeholder="User name or email address"
            value={user}
            required
          />
        </div>
        <div className="input password">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <div className="landing-btn">
          <button className="signin-btn" type="submit" onClick={handleSubmit}>
            Sign-In
          </button>
          <Link to="/signup">
            <button className="register-btn" type="submit">
              Register
            </button>
          </Link>
        </div>
      </form>
    </>
  );
}

export default Login;
