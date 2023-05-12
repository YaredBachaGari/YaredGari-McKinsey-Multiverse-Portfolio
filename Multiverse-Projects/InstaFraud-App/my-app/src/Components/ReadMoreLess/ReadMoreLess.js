import React, { useContext, useState } from "react";
import "./ReadMoreStyle.css";
import { InstFraudContext } from "../../Context/Context";

function ReadMoreLess({ children }) {
  const { readmoreClicked, toggleReadmoreText } =
    React.useContext(InstFraudContext);

  return (
    <div>
      {readmoreClicked 
        ? children
        : children.substr(0, 150)}
      <button className="toggle-btn" onClick={toggleReadmoreText}>
        {readmoreClicked ? "...view less" : "...read more"}
      </button>
    </div>
  );
}

export default ReadMoreLess;
