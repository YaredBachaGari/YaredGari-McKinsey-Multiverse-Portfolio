import React from "react";
import { Link } from "react-router-dom";
import './RegistrationSuccessStyle.css'

function RegistrationSuccess() {
  return (
    <div className="success-card">
      <h1>Registration Successful!</h1>
      <Link to="/login">
        <button>SignIn</button>
      </Link>
    </div>
  );
}

export default RegistrationSuccess;
