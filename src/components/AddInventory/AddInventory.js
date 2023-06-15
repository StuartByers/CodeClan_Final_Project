import React from "react";
import { Link } from "react-router-dom";
import logo6 from "./logo6.png";
import logo60 from "./logo60.png";
import logo4 from "./Retailors/stockx.png";
import logo10 from "./Retailors/nike.png";
import logo11 from "./Retailors/adidas.png";
import logo12 from "./Retailors/yeezy.png";
import logo13 from "./Retailors/jordan.png";
import logo14 from "./Retailors/nb.png";
import './AddInventory.css';

const AddInventory = () => (
  <div className="main-container6401">
    <div className="top-container6401">
      <div className="user-container6401">
        <div className="user-info-container6401">
          <p className="user-login6401">SIGNED IN - USER 0001</p>
          <div className="links-container6401">
            <Link to="/update" className="update-link6401">UPDATE</Link>
            <div className="separator6401"></div>
            <Link to="/" className="signout-link6401">SIGN OUT</Link>
          </div>
        </div>
      </div>
      <div className="content-container6">
        <div className="header-container6">
          <div className="controller-container6">  
            <img className="logo6" src={logo6} alt="Logo" />
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
          <div className="add-sneaker-photo-box06">
            <div className="add-sneaker-photo-title06">PREVIEW PICTURE</div>
          </div>
          <div className="separator-line06666"></div>
            <body className="signup-frame06">
              <div className="signup-container06">
                <div className="logo-container06">
                  <img className="logo60" src={logo60} alt="Logo" />
                </div>
                <div className="details-container06">
                  <select id="menu" class="dropdown06">
                    <option value="Brand">Brand</option>
                    <option value="Adidas">Adidas</option>
                    <option value="Nike">Nike</option>
                    <option value="Yeezy">Yeezy</option>
                    <option value="Jordan Brand">Jordan Brand</option>
                    <option value="New Balance">New Balance</option>
                  </select>
                  <input type="text" placeholder="Model" className="sname-box06" />
                  <select id="menu" class="dropdown06">
                    <option value="Size">Size</option>
                    <option value="US Mens 5 / UK Mens 4">US Mens 5 / UK Mens 4</option>
                    <option value="US Mens 5.5 / UK Mens 4.5">US Mens 5.5 / UK Mens 4.5</option>
                    <option value="US Mens 6 / UK Mens 5">US Mens 6 / UK Mens 5.5</option>
                    <option value="US Mens 6.5 / UK Mens 5.5">US Mens 6.5 / UK Mens 8</option>
                    <option value="US Mens 7 / UK Mens 6">US Mens 7 / UK Mens 8</option>
                    <option value="US Mens 7.5 / UK Mens 6.5">US Mens 7.5 / UK Mens 8</option>
                    <option value="US Mens 8 / UK Mens 7">US Mens 8 / UK Mens 8</option>
                    <option value="US Mens 8.5 / UK Mens 7.7">US Mens 8.5 / UK Mens 8</option>
                    <option value="US Mens 9 / UK Mens 9">US Mens 9 / UK Mens 8</option>
                    <option value="US Mens 9.5 / UK Mens 8.5">US Mens 9.5 / UK Mens 8.5</option>
                    <option value="US Mens 10 / UK Mens 9">US Mens 10 / UK Mens 9</option>
                    <option value="US Mens 10.5 / UK Mens 9.5">US Mens 10.5 / UK Mens 9.5</option>
                    <option value="US Mens 11 / UK Mens 10">US Mens 11 / UK Mens 10</option>
                    <option value="US Mens 11.5 / UK Mens 10.5">US Mens 11.5 / UK Mens 10.5</option>
                    <option value="US Mens 12 / UK Mens 11">US Mens 12 / UK Mens 11</option>
                    <option value="US Mens 12.5 / UK Mens 11.5">US Mens 12.5 / UK Mens 11.5</option>
                    <option value="US Mens 13 / UK Mens 12">US Mens 13 / UK Mens 12</option>
                    <option value="US Mens 13.5 / UK Mens 12.5">US Mens 13.5 / UK Mens 12.5</option>
                    <option value="US Mens 14 / UK Mens 13">US Mens 14 / UK Mens 13</option>
                  </select>
                  <input type="text" placeholder="Retail Price" className="other-box06" />
                </div>
                <div className="password-container06">
                  <input type="text" placeholder="Image URL" className="password-box06" />
                  <select id="menu" class="dropdown06">
                    <option value="Listed">Not Listed</option>
                    <option value="Not Listed">listed</option>
                  </select>
                </div>
                <div className="button-container06">
                  <Link to="/inventory" className="link-button06">BACK</Link>
                  <div className="separator6"></div>
                  <Link to="/picinventory" className="link-button06">IMPORT IMAGE
                  </Link>
                  <div className="separator6"></div>
                  <Link to="/inventory" className="link-button06">ADD </Link>
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

export default AddInventory;