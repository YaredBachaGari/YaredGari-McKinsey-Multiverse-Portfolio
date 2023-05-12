import React, { useState } from "react";
import "./SignupStyle.css";
import { InstFraudContext } from "../../Context/Context";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "../../api/axios";

function SignUp() {
  const { setRegisterClicked } = React.useContext(InstFraudContext);
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [backEndMsg, setBackEndMsg] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  //navigate('/signup',{state:{from:location}, replace:true})
  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      FirstName: FirstName,
      LastName: LastName,
      password: password,
      email: email,
    };
    if (password !== ConfirmPassword)
      return setErrorMsg("Password doesnt match");

    try {
      const response = await axios.post("/signup", userData);
      setBackEndMsg("");
      navigate("/success", { state: { from: location }, replace: true });
      console.log(response);
    } catch (error) {
      setBackEndMsg(error.response.data.message);
      console.log(error.response.data.message);
    }
  };
  return (
    <form className="signup-form">
      <h1>
        Already have an account?{"   "}
        <Link to="/login">
          <button id="signinbtn">SignIn</button>
        </Link>
      </h1>
      {(errorMsg || backEndMsg) && (
        <h5
          style={{
            color: "#ed2121",
            margin: " 1.5rem 0",
          }}
        >
          {errorMsg}
          {backEndMsg}
        </h5>
      )}
      <div className="input Firstname">
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
      </div>
      <div className="input Lastname">
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        ></input>
      </div>
      <div className="input Email">
        <input
          type="text"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className="input password">
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div className="input Confirmpassword">
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
      </div>
      <div className="register-btn">
        <button className="submit-btn" type="submit" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default SignUp;
