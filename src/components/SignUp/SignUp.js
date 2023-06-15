import React from "react";
import { Link } from "react-router-dom";
import logo2 from "./logo2.png";
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="signup-form2">
      <body className="signup-frame2">
        <div className="signup-container2">
          <div className="logo-container2">
            <img className="logo2" src={logo2} alt="Logo" />
          </div>
          <div className="details-container2">
            <input type="text" placeholder="First Name" className="fname-box2" />
            <input type="text" placeholder="Surname" className="sname-box2" />
            <input type="text" placeholder="Email" className="email-box2" />
          </div>
          <div className="password-container2">
            <input type="password" placeholder="Password" className="password-box2" />
            <input type="password" placeholder="Verify Password" className="vpassword-box2" />
          </div>
          <div className="button-container2">
            <Link to="/" className="link-button2">SIGN IN </Link>
            <div className="separator2"></div>
            <Link to="/" className="link-button2">SIGN UP</Link>
          </div>
        </div>
      </body>
    </div>
  );
}

export default SignUp;

