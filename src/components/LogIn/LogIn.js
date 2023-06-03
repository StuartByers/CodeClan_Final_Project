import React from "react";
import { Link } from "react-router-dom";
import './LogIn.css';
import logo1 from "./logo1.png"; // Import the image file

const LogIn = () => {
  return (
    <div className="login-form">
      <img className="logo1" src={logo1} alt="Logo1" /> {/* Display the image */}
      <div className="input-container1">
        <input type="text" placeholder="Email" className="input-box1" />
        <input type="password" placeholder="Password" className="input-box1" />
      </div>
      <div className="button-container1">
        <Link to="/main" className="link-button1">SIGN IN</Link>
        <div className="separator"></div>
        <Link to="/signup" className="link-button1">SIGN UP</Link>
      </div>
    </div>
  );
}

export default LogIn;