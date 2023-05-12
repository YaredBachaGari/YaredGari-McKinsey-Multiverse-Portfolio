import React from "react";
import {useNavigate} from 'react-router-dom'
import './UnAuthorized.css'

function UnAuthorized() {
    const navigate = useNavigate()
    const goBack =()=> navigate(-1)
  return (
    <div className="msgCont">
      <h1>UnAuthroized</h1>
      <p>You dont have access to the requested page.</p>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}

export default UnAuthorized;
