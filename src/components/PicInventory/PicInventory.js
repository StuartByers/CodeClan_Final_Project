import React from "react";
import { Link } from "react-router-dom";
import logo8 from "./logo8.png";
import logo80 from "./logo80.png";
import logo4 from "./Retailors/stockx.png";
import logo10 from "./Retailors/nike.png";
import logo11 from "./Retailors/adidas.png";
import logo12 from "./Retailors/yeezy.png";
import logo13 from "./Retailors/jordan.png";
import logo14 from "./Retailors/nb.png";
import './PicInventory.css';

const PicInventory = () => (
  <div className="main-container68">
    <div className="top-container68">
      <div className="user-container68">
        <div className="user-info-container68">
          <p className="user-login68">SIGNED IN - USER 0001</p>
          <div className="links-container68">
            <Link to="/update" className="update-link68">UPDATE</Link>
            <div className="separator68"></div>
            <Link to="/" className="signout-link68">SIGN OUT</Link>
          </div>
        </div>
      </div>
      <div className="content-container6">
        <div className="header-container6">
          <div className="controller-container6">  
            <img className="logo8" src={logo8} alt="Logo" />
            <div className="link-container6">
                <Link to="/main" className="link66">NEWS</Link>
              <Link to="/calendar" className="link66">CALENDAR</Link>
              <Link to="/inventory" className="link6">INVENTORY</Link>
              <Link className="link66">SALES</Link>
              <Link className="link666">ANALYTICS</Link>
            </div>
          </div>
        </div>
        <div className="separator-line66"></div>
      </div>
      <div className="middle-container6">
        <div className="dashboard-container6">
          <div className="stats-container6">
          <div className="invent6">
              <div className="invent-title-box6">
                <div className="invent-title6">INVENTORY</div>
              </div>
              <div className="number01-box6">
                <div className="count016">0000</div>
              </div>
            </div>
          <div className="stats-separator016"></div>
            <div className="value6">
              <div className="value-title-box6">
                <div className="value-title6">VALUE</div>
              </div>
              <div className="number02-box6">
                <div className="count026">0000</div>
              </div>
            </div>
          <div className="stats-separator026"></div>
            <div className="resold6">
              <div className="resold-title-box6">
                <div className="resold-title6">RESOLD</div>
              </div>
              <div className="number03-box6">
                <div className="count036">0000</div>
              </div>
            </div>
          <div className="stats-separator036"></div>
            <div className="profit6">
              <div className="profit-title-box6">
                <div className="profit-title6">PROFIT</div>
              </div>
              <div className="number04-box6">
                <div className="count046">0000</div>
              </div>
            </div>
          </div>
          <div className="separator-line666"></div>
        </div>
        <div className="body-container6">
          <div className="add-sneaker-frame06">
          <div className="add-sneaker-photo-box08">
            <div className="add-sneaker-photo-title06"></div>
          </div>
          <div className="separator-line06666"></div>
            <body className="signup-frame06">
              <div className="signup-container06">
                <div className="logo-container06">
                  <img className="logo80" src={logo80} alt="Logo" />
                </div>
                <div className="details-container06">
                  <select id="menu" class="dropdown06">
                    <option value="Jordan Brand">Jordan Brand</option>
                  </select>
                  <input type="text" placeholder="Air Jordan 3 White Cement Reimagined" className="sname-box06" />
                  <select id="menu" class="dropdown06">
                    <option value="US Mens 10 / UK Mens 9">US Mens 10 / UK Mens 9</option>
                  </select>
                  <input type="text" placeholder="189" className="other-box06" />
                </div>
                <div className="password-container06">
                  <input type="text" placeholder="https://cms-cdn.thesolesupplier.co.uk/2022/05/air-jordan-3-white-cement-reimagined-dn3707-100-1_w1024_h1024_pad_.jpg.webp" className="password-box06" />
                  <select id="menu" class="dropdown06">
                    <option value="Listed">Not Listed</option>
                    <option value="Not Listed">Listed</option>
                  </select>
                </div>
                <div className="button-container06">
                  <Link to="/addinventory" className="link-button06">BACK</Link>
                  <div className="separator6"></div>
                  <Link to="/picinventory" className="link-button06">IMPORT IMAGE</Link>
                  <div className="separator6"></div>
                  <Link to="/filledinventory" className="link-button06">ADD </Link>
                </div>
              </div>
            </body>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-container6">
        <div className="retailor-container6">
          <a href="https://stockx.com" target="_blank" rel="noopener noreferrer">
            <img className="stockx6" src={logo4} alt="StockX" />
          </a>
          <a href="https://adidas.com" target="_blank" rel="noopener noreferrer">
            <img className="adidas6" src={logo11} alt="Adidas" />
          </a>
          <a href="https://nike.com" target="_blank" rel="noopener noreferrer">
            <img className="nike6" src={logo10} alt="Nike" />
          </a>
          <a href="https://www.adidas.co.uk/yeezy" target="_blank" rel="noopener noreferrer">
            <img className="yeezy6" src={logo12} alt="Yeezy" />
          </a>
          <a href="https://www.nike.com/jordan" target="_blank" rel="noopener noreferrer">
            <img className="jordan6" src={logo13} alt="Jordan" />
          </a>
          <a href="https://www.newbalance.com" target="_blank" rel="noopener noreferrer">
            <img className="new-balance6" src={logo14} alt="New Balance" />
          </a>
        </div>
    </div>
  </div>
);

export default PicInventory;