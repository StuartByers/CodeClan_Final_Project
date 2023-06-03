import React from "react";
import { Link } from "react-router-dom";
import './SignUp.css';
import logo2 from "./logo2.png"; // Import the image file

const SignUp = () => {
  return (
    <div className="signup-form">
      <img className="logo2" src={logo2} alt="Logo" /> {/* Display the image */}
      <div className="input-container2">
        <input type="text" placeholder="First Name" className="input-box2" />
        <input type="text" placeholder="Surname" className="input-box2" />
        <input type="text" placeholder="Email" className="input-box3" />
        <input type="password" placeholder="Password" className="input-box2" />
        <input type="password" placeholder="Verify Password" className="input-box2" />
      </div>
      <div className="button-container2">
      <Link to="/" className="link-button2">SIGN UP</Link>
      </div>
    </div>
  );
}

export default SignUp;

