import React from "react";
import { Link } from "react-router-dom";
import logo7 from "./logo7.png";
import logo70 from "./logo70.png";
import logo4 from "./Retailors/stockx.png";
import logo10 from "./Retailors/nike.png";
import logo11 from "./Retailors/adidas.png";
import logo12 from "./Retailors/yeezy.png";
import logo13 from "./Retailors/jordan.png";
import logo14 from "./Retailors/nb.png";
import './AddCalendar.css';

const AddCalendar = () => (
  <div className="main-container007">
    <div className="top-container007">
      <div className="user-container007">
        <div className="user-info-container007">
          <p className="user-login007">SIGNED IN - USER 0001</p>
          <div className="links-container007">
            <Link to="/update" className="update-link007">UPDATE</Link>
            <div className="separator007"></div>
            <Link to="/" className="signout-link007">SIGN OUT</Link>
          </div>
        </div>
      </div>
      <div className="content-container7">
        <div className="header-container7">
          <div className="controller-container7">  
            <img className="logo7" src={logo7} alt="Logo" />
            <div className="link-container7">
                <Link to="/main" className="link77">NEWS</Link>
              <Link to="/calendar" className="link7">CALENDAR</Link>
              <Link to="/inventory" className="link77">INVENTORY</Link>
              <Link className="link77">SALES</Link>
              <Link className="link777">ANALYTICS</Link>
            </div>
          </div>
        </div>
        <div className="separator-line77"></div>
      </div>
      <div className="middle-container7">
        <div className="dashboard-container7">
          <div className="stats-container7">
          <div className="invent7">
              <div className="invent-title-box7">
                <div className="invent-title7">INVENTORY</div>
              </div>
              <div className="number01-box7">
                <div className="count017">0002</div>
              </div>
            </div>
          <div className="stats-separator017"></div>
            <div className="value7">
              <div className="value-title-box7">
                <div className="value-title7">VALUE</div>
              </div>
              <div className="number02-box7">
                <div className="count027">0350</div>
              </div>
            </div>
          <div className="stats-separator027"></div>
            <div className="resold7">
              <div className="resold-title-box7">
                <div className="resold-title7">RESOLD</div>
              </div>
              <div className="number03-box7">
                <div className="count037">0000</div>
              </div>
            </div>
          <div className="stats-separator037"></div>
            <div className="profit7">
              <div className="profit-title-box7">
                <div className="profit-title7">PROFIT</div>
              </div>
              <div className="number04-box7">
                <div className="count047">0000</div>
              </div>
            </div>
          </div>
          <div className="separator-line777"></div>
        </div>
        <div className="body-container7">
          <div className="add-sneaker-frame07">
          <div className="add-sneaker-photo-box07">
            <div className="add-sneaker-photo-title07">PREVIEW PICTURE</div>
          </div>
          <div className="separator-line07777"></div>
            <body className="signup-frame07">
              <div className="signup-container07">
                <div className="logo-container07">
                  <img className="logo70" src={logo70} alt="Logo" />
                </div>
                <div className="details-container07">
                  <input type="text" placeholder="Model" className="fname-box07" />
                  <input type="text" placeholder="Image URL" className="sname-box07" />
                </div>
                <div className="button-container07">
                  <Link to="/deccalendar" className="link-button07">BACK</Link>
                  <div className="separator7"></div>
                  <Link to="/piccalendar" className="link-button07">IMPORT IMAGE</Link>
                  <div className="separator7"></div>
                  <Link to="/filledcalendar" className="link-button07">ADD </Link>
                </div>
              </div>
            </body>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-container7">
        <div className="retailor-container7">
          <a href="https://stockx.com" target="_blank" rel="noopener noreferrer">
            <img className="stockx7" src={logo4} alt="StockX" />
          </a>
          <a href="https://adidas.com" target="_blank" rel="noopener noreferrer">
            <img className="adidas7" src={logo11} alt="Adidas" />
          </a>
          <a href="https://nike.com" target="_blank" rel="noopener noreferrer">
            <img className="nike7" src={logo10} alt="Nike" />
          </a>
          <a href="https://www.adidas.co.uk/yeezy" target="_blank" rel="noopener noreferrer">
            <img className="yeezy7" src={logo12} alt="Yeezy" />
          </a>
          <a href="https://www.nike.com/jordan" target="_blank" rel="noopener noreferrer">
            <img className="jordan7" src={logo13} alt="Jordan" />
          </a>
          <a href="https://www.newbalance.com" target="_blank" rel="noopener noreferrer">
            <img className="new-balance7" src={logo14} alt="New Balance" />
          </a>
        </div>
    </div>
  </div>
);

export default AddCalendar;