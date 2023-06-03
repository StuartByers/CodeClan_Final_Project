import React from "react";
import { Link } from "react-router-dom";
import './Main.css';
import logo3 from "./logo3.png"; // Import the image file
import logo4 from "./stockx.png"; // Import the image file

const Main = () => (
  <div className="main-container">
    <div className="header-bar">
        <img className="logo3" src={logo3} alt="Logo" /> {/* Display the image */}
        <div className="link-container">
            <Link to="/main" className="link1">MAIN</Link>
            <Link to="/calendar" className="link1">CALENDAR</Link>
            <Link to="/inventory" className="link1">INVENTORY</Link>
            <Link to="/" className="link2">SIGN OUT</Link>
        </div>
    </div>
        <a href="https://stockx.com" target="_blank" rel="noopener noreferrer">
            <img className="stockx" src={logo4} alt="StockX" />
        </a>
  </div>
);

export default Main;