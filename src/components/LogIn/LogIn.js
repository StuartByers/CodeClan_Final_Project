import React from "react";
import { Link } from "react-router-dom";
import './LogIn.css';
import logo1 from "./logo1.png"; // Import the image file

const LogIn = () => {
  return (
    <div className="login-form1">
      <body className="signup-frame1">
        <div className="signup-container1">
          <div className="logo-container1">
            <img className="logo1" src={logo1} alt="Logo" />
          </div>
          <div className="details-container1"></div>
          <div className="password-container1">
            <input type="password" placeholder="Email" className="email-box1" />
            <input type="password" placeholder="Password" className="password-box1" />
          </div>
          <div className="button-container1">
            <Link to="/main" className="link-button1">SIGN IN</Link>
            <div className="separator1"></div>
            <Link to="/signup" className="link-button1">SIGN UP</Link>
          </div>
        </div>
      </body>
    </div>
  );
}

export default LogIn;