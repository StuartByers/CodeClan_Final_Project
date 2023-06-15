import React from "react";
import { Link } from "react-router-dom";
import logo10 from "./logo10.png";
import './Update.css';

const Update = () => {
  return (
    <div className="update-form9">
      <body className="signup-frame9">
        <div className="signup-container9">
          <div className="logo-container9">
            <img className="logo10" src={logo10} alt="Logo" />
          </div>
          <div className="details-container9">
            <input type="text" placeholder="First Name" className="fname-box9" />
            <input type="text" placeholder="Surname" className="sname-box9" />
            <input type="text" placeholder="Email" className="email-box9" />
          </div>
          <div className="password-container9">
            <input type="password" placeholder="Password" className="password-box9" />
            <input type="password" placeholder="Verify Password" className="vpassword-box9" />
          </div>
          <div className="button-container9">
            <Link to="/main" className="link-button9">RETURN</Link>
            <div className="separator9218"></div>
            <Link to="/main" className="link-button9">UPDATE</Link>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Update;

