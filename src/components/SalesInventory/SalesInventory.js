import React from "react";
import { Link } from "react-router-dom";
import logo4216 from "./logo4216.png";
import logo10 from "./Retailors/nike.png";
import logo11 from "./Retailors/adidas.png";
import logo12 from "./Retailors/yeezy.png";
import logo13 from "./Retailors/jordan.png";
import logo14 from "./Retailors/nb.png";
import logo15 from "./Retailors/stockx.png";
import logo16 from "./airjordan.png";
import './SalesInventory.css';

const SalesInventory = () => (
  <div className="main-container4216">
    <div className="top-container4216">
      <div className="user-container4216">
        <div className="user-info-container4216">
          <p className="user-login4216">SIGNED IN - USER 0001</p>
          <div className="links-container4216">
            <Link to="/update" className="update-link4216">UPDATE</Link>
            <div className="separator4216"></div>
            <Link to="/" className="signout-link4216">SIGN OUT</Link>
          </div>
        </div>
      </div>
      <div className="content-container4216">
        <div className="header-container4216">
          <div className="controller-container4216">  
            <img className="logo4216" src={logo4216} alt="Logo" />
            <div className="link-container4216">
                <Link to="/main" className="link44216">NEWS</Link>
              <Link to="/calendar" className="link44216">CALENDAR</Link>
              <Link to="/inventory" className="link44216">INVENTORY</Link>
              <Link to="/salesinventory" className="link4216">SALES</Link>
              <Link className="link444216">ANALYTICS</Link>
            </div>
          </div>
        </div>
        <div className="separator-line44216"></div>
        </div>
      <div className="middle-container5new">
        <div className="dashboard-container5new">
        <div className="stats-container5new">
          <div className="button-container5new">
          </div>
          <div className="filter-bar-container5616new37">
            <select id="menu" class="dropdown5616new37">
              <option value="All">All</option>
              <option value="Adidas">Adidas</option>
              <option value="Nike">Nike</option>
              <option value="Yeezy">Yeezy</option>
              <option value="Jordan Brand">Jordan Brand</option>
              <option value="New Balance">New Balance</option>
            </select>
            <div className="filter-button-container5616new37">
              <button className="filter-button5616new37"><Link to="/inventory">SELECT</Link></button>
            </div>
            <div className="filter-button-container5616new37">
              <button className="filter-button5616new37"><Link to="/inventory">CLEAR</Link></button>
            </div>
          </div>
          <div className="invent5new">
              <div className="invent-title-box5new">
                <div className="invent-title5new">INVENTORY</div>
              </div>
              <div className="number01-box5new">
                <div className="count015new">0000</div>
              </div>
            </div>
          <div className="stats-separator015new"></div>
            <div className="value5new">
              <div className="value-title-box5new">
                <div className="value-title5new">VALUE</div>
              </div>
              <div className="number02-box5yzy">
                <div className="count025new">0000</div>
              </div>
            </div>
          <div className="stats-separator025new"></div>
            <div className="resold5new">
              <div className="resold-title-box5new">
                <div className="resold-title5new">RESOLD</div>
              </div>
              <div className="number03-box5new">
                <div className="count035new">0001</div>
              </div>
            </div>
          <div className="stats-separator035new"></div>
            <div className="profit5new">
              <div className="profit-title-box5new">
                <div className="profit-title5new">PROFIT</div>
              </div>
              <div className="number04-box5new">
                <div className="count045new">0189</div>
              </div>
            </div>
          </div>
          <div className="separator-line444216"></div>
        </div>
        <div className="body-container4216">
          <div className="added-sneaker-frame4216">
            <div className="added-sneaker-container4216">
              <div className="added-sneaker-header4216">
                <img className="added-sneaker-logo4216" src={logo16} alt="Jumpman"></img>
                <div className="added-sneaker-pic4216"></div>
                <div className="added-sneaker-info4216">
                  <p className="added-sneaker-brand4216">Jordan Brand</p>
                  <p className="added-sneaker-model4216">Air Jordan 3 White Cement Reimagined</p>
                  <p className="added-sneaker-size4216">US Mens 10 / UK Mens 9</p>
                  <p className="added-sneaker-price4216">£189</p>
                </div>
                <div className="added-sneaker-buttons4216">
                  <a href="/picinventory" className="hold-sneaker-link4216">EDIT</a>
                    <div className="separator44444216"></div>
                  <a href="/inventory" className="list-sneaker-link4216">DELETE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-container4216">
        <div className="retailor-container4216">
          <a href="https://stockx.com" target="_blank" rel="noopener noreferrer">
            <img className="stockx4216" src={logo15} alt="StockX" />
          </a>
          <a href="https://adidas.com" target="_blank" rel="noopener noreferrer">
            <img className="adidas4216" src={logo11} alt="Adidas" />
          </a>
          <a href="https://nike.com" target="_blank" rel="noopener noreferrer">
            <img className="nike4216" src={logo10} alt="Nike" />
          </a>
          <a href="https://www.adidas.co.uk/yeezy" target="_blank" rel="noopener noreferrer">
            <img className="yeezy4216" src={logo12} alt="Yeezy" />
          </a>
          <a href="https://www.nike.com/jordan" target="_blank" rel="noopener noreferrer">
            <img className="jordan4216" src={logo13} alt="Jordan" />
          </a>
          <a href="https://www.newbalance.com" target="_blank" rel="noopener noreferrer">
            <img className="new-balance4216" src={logo14} alt="New Balance" />
          </a>
        </div>
    </div>
  </div>
);

export default SalesInventory;