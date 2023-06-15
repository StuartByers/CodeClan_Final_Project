import React from "react";
import { Link } from "react-router-dom";
import logo792 from "./logo792.png";
import logo7092 from "./logo7092.png";
import logo4 from "./Retailors/stockx.png";
import logo10 from "./Retailors/nike.png";
import logo11 from "./Retailors/adidas.png";
import logo12 from "./Retailors/yeezy.png";
import logo13 from "./Retailors/jordan.png";
import logo14 from "./Retailors/nb.png";
import './PicCalendar.css';

const PicCalendar = () => (
  <div className="main-container00792">
    <div className="top-container00792">
      <div className="user-container00792">
        <div className="user-info-container00792">
          <p className="user-login00792">SIGNED IN - USER 0001</p>
          <div className="links-container00792">
            <Link to="/update" className="update-link00792">UPDATE</Link>
            <div className="separator00792"></div>
            <Link to="/" className="signout-link00792">SIGN OUT</Link>
          </div>
        </div>
      </div>
      <div className="content-container792">
        <div className="header-container792">
          <div className="controller-container792">  
            <img className="logo792" src={logo792} alt="Logo" />
            <div className="link-container792">
                <Link to="/main" className="link7792">NEWS</Link>
              <Link to="/calendar" className="link792">CALENDAR</Link>
              <Link to="/inventory" className="link7792">INVENTORY</Link>
              <Link className="link7792">SALES</Link>
              <Link className="link77792">ANALYTICS</Link>
            </div>
          </div>
        </div>
        <div className="separator-line7792"></div>
      </div>
      <div className="middle-container792">
        <div className="dashboard-container792">
          <div className="stats-container792">
          <div className="invent792">
              <div className="invent-title-box792">
                <div className="invent-title792">INVENTORY</div>
              </div>
              <div className="number01-box792">
                <div className="count01792">0002</div>
              </div>
            </div>
          <div className="stats-separator01792"></div>
            <div className="value792">
              <div className="value-title-box792">
                <div className="value-title792">VALUE</div>
              </div>
              <div className="number02-box792">
                <div className="count02792">0350</div>
              </div>
            </div>
          <div className="stats-separator02792"></div>
            <div className="resold792">
              <div className="resold-title-box792">
                <div className="resold-title792">RESOLD</div>
              </div>
              <div className="number03-box792">
                <div className="count03792">0000</div>
              </div>
            </div>
          <div className="stats-separator03792"></div>
            <div className="profit792">
              <div className="profit-title-box792">
                <div className="profit-title792">PROFIT</div>
              </div>
              <div className="number04-box792">
                <div className="count04792">0000</div>
              </div>
            </div>
          </div>
          <div className="separator-line77792"></div>
        </div>
        <div className="body-container792">
          <div className="add-sneaker-frame0792">
          <div className="add-sneaker-photo-box0792">
          </div>
          <div className="separator-line0777792"></div>
            <body className="signup-frame0792">
              <div className="signup-container0792">
                <div className="logo-container0792">
                  <img className="logo7092" src={logo7092} alt="Logo" />
                </div>
                <div className="details-container0792">
                  <input type="text" placeholder="Air Jordan 3 White Cement Reimagined" className="fname-box0792" />
                  <input type="text" placeholder="https://cms-cdn.thesolesupplier.co.uk/2022/05/air-jordan-3-white-cement-reimagined-dn3707-100-1_w1024_h1024_pad_.jpg.webp" className="sname-box0792" />
                </div>
                <div className="button-container0792">
                  <Link to="/addcalendar" className="link-button0792">BACK</Link>
                  <div className="separator792"></div>
                  <Link to="/piccalendar" className="link-button0792">IMPORT IMAGE</Link>
                  <div className="separator792"></div>
                  <Link to="/filledcalendar" className="link-button0792">ADD </Link>
                </div>
              </div>
            </body>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-container792">
        <div className="retailor-container792">
          <a href="https://stockx.com" target="_blank" rel="noopener noreferrer">
            <img className="stockx792" src={logo4} alt="StockX" />
          </a>
          <a href="https://adidas.com" target="_blank" rel="noopener noreferrer">
            <img className="adidas792" src={logo11} alt="Adidas" />
          </a>
          <a href="https://nike.com" target="_blank" rel="noopener noreferrer">
            <img className="nike792" src={logo10} alt="Nike" />
          </a>
          <a href="https://www.adidas.co.uk/yeezy" target="_blank" rel="noopener noreferrer">
            <img className="yeezy792" src={logo12} alt="Yeezy" />
          </a>
          <a href="https://www.nike.com/jordan" target="_blank" rel="noopener noreferrer">
            <img className="jordan792" src={logo13} alt="Jordan" />
          </a>
          <a href="https://www.newbalance.com" target="_blank" rel="noopener noreferrer">
            <img className="new-balance792" src={logo14} alt="New Balance" />
          </a>
        </div>
    </div>
  </div>
);

export default PicCalendar;