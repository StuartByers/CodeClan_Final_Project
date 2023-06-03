import React from "react";
import { Link } from "react-router-dom";
import './SignUp.css';
import logo from "./logo0.png"; // Import the image file

const SignUp = () => {
  return (
    <div className="signup-form">
      <img className="logo0" src={logo} alt="Logo" /> {/* Display the image */}
      <div className="input-container">
        <input type="text" placeholder="First Name" className="input-box" />
        <input type="text" placeholder="Syrname" className="input-box" />
        <input type="text" placeholder="Email" className="input-box" />
        <input type="password" placeholder="Password" className="input-box" />
        <input type="password" placeholder="Verify Password" className="input-box" />
      </div>
      <div className="button-container">
        <Link to="/" className="link-button">
          <button>SIGN UP</button>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;

