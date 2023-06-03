import React from "react";
import { Link } from "react-router-dom";
import './LogIn.css';
import logo from "./logo0.png"; // Import the image file

const LogIn = () => {
  return (
    <div className="login-form">
      <img className="logo0" src={logo} alt="Logo" /> {/* Display the image */}
      <div className="input-container">
        <input type="text" placeholder="Email" className="input-box" />
        <input type="password" placeholder="Password" className="input-box" />
      </div>
      <div className="button-container">
        <Link to="/main" className="link-button">
          <button>SIGN IN</button>
        </Link>
        <div className="separator"></div>
        <Link to="/signup" className="link-button">
          <button>SIGN UP</button>
        </Link>
      </div>
    </div>
  );
}

export default LogIn;