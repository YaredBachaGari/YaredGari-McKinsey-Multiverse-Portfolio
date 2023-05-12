import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LandingStyle.css";

function LandingPage() {
  return (
    <main className="land-page">
      <div className="landingpage">
        <header className="app-name">
          <span className="insta">Insta</span>
          <span className="faud">Fraud</span>
        </header>
        <div className="auth-btn">
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="signup-btn">SignUp</button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default LandingPage;
