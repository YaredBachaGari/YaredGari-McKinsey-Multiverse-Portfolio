import React, { useState } from "react";
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/SignUp/SignUp";
import { Link } from "react-router-dom";
import RegistrationSuccess from "../../Components/RegistrationSuccess/RegistrationSuccess";
import "./SuccessPageStyle.css";

function SuccessPage() {


  return (
      <RegistrationSuccess/>
  );
}

export default SuccessPage;
