import React from "react";
import { Link } from "react-router-dom";
import logo5616 from "./logo5616.png";
import logo10 from "./Retailors/nike.png";
import logo11 from "./Retailors/adidas.png";
import logo12 from "./Retailors/yeezy.png";
import logo13 from "./Retailors/jordan.png";
import logo14 from "./Retailors/nb.png";
import logo15 from "./Retailors/stockx.png";
import logo16 from "./airjordan.png";
import './Inventory.css';

const Inventory = () => (
  <div className="main-container5616i">
    <div className="top-container5616i">
      <div className="user-container5616i">
        <div className="user-info-container5616i">
          <p className="user-login5616i">SIGNED IN - USER 0001</p>
          <div className="links-container5616i">
            <Link to="/update" className="update-link5616i">UPDATE</Link>
            <div className="separator5616i"></div>
            <Link to="/" className="signout-link5616i">SIGN OUT</Link>
          </div>
        </div>
      </div>
      <div className="content-container5616">
        <div className="header-container5616">
          <div className="controller-container5616">  
            <img className="logo5616" src={logo5616} alt="Logo" />
            <div className="link-container5616">
                <Link to="/main" className="link55616">NEWS</Link>
              <Link to="/calendar" className="link55616">CALENDAR</Link>
              <Link to="/inventory" className="link5616">INVENTORY</Link>
              <Link to="/salesinventory" className="link55616">SALES</Link>
              <Link className="link555616">ANALYTICS</Link>
            </div>
          </div>
        </div>
        <div className="separator-line55616"></div>
      </div>
      <div className="middle-container5616">
        <div className="dashboard-container5616">
        <div className="stats-container5616">
          <div className="button-container5616">
            <p className="add-title5616">ADD SNEAKER</p>
              <button className="add-button5616"><Link to="/addinventory">+</Link></button>
          </div>
          <div className="filter-bar-container5616i">
            <select id="menu" class="dropdown5616i">
              <option value="All">All</option>
              <option value="Adidas">Adidas</option>
              <option value="Nike">Nike</option>
              <option value="Yeezy">Yeezy</option>
              <option value="Jordan Brand">Jordan Brand</option>
              <option value="New Balance">New Balance</option>
            </select>
            <div className="filter-button-container5616new">
              <button className="filter-button5616new"><Link to="/inventory">SELECT</Link></button>
            </div>
            <div className="filter-button-container5616new">
              <button className="filter-button5616new"><Link to="/inventory">CLEAR</Link></button>
            </div>
          </div>
          <div className="invent5616">
              <div className="invent-title-box5616">
                <div className="invent-title5616">INVENTORY</div>
              </div>
              <div className="number01-box5616">
                <div className="count015616">0000</div>
              </div>
            </div>
          <div className="stats-separator015616"></div>
            <div className="value5616">
              <div className="value-title-box5616">
                <div className="value-title5616">VALUE</div>
              </div>
              <div className="number02-box5616">
                <div className="count025616">0000</div>
              </div>
            </div>
          <div className="stats-separator025616"></div>
            <div className="resold5616">
              <div className="resold-title-box5616">
                <div className="resold-title5616">RESOLD</div>
              </div>
              <div className="number03-box5616">
                <div className="count035616">0000</div>
              </div>
            </div>
          <div className="stats-separator035616"></div>
            <div className="profit5616">
              <div className="profit-title-box5616">
                <div className="profit-title5616">PROFIT</div>
              </div>
              <div className="number04-box5616">
                <div className="count045616">0000</div>
              </div>
            </div>
          </div>
          <div className="separator-line555616"></div>
        </div>
        <div className="body-container5616"></div>
      </div>
    </div>
    <div className="footer-container5616">
        <div className="retailor-container5616">
          <a href="https://stockx.com" target="_blank" rel="noopener noreferrer">
            <img className="stockx5616" src={logo15} alt="StockX" />
          </a>
          <a href="https://adidas.com" target="_blank" rel="noopener noreferrer">
            <img className="adidas5616" src={logo11} alt="Adidas" />
          </a>
          <a href="https://nike.com" target="_blank" rel="noopener noreferrer">
            <img className="nike5616" src={logo10} alt="Nike" />
          </a>
          <a href="https://www.adidas.co.uk/yeezy" target="_blank" rel="noopener noreferrer">
            <img className="yeezy5616" src={logo12} alt="Yeezy" />
          </a>
          <a href="https://www.nike.com/jordan" target="_blank" rel="noopener noreferrer">
            <img className="jordan5616" src={logo13} alt="Jordan" />
          </a>
          <a href="https://www.newbalance.com" target="_blank" rel="noopener noreferrer">
            <img className="new-balance5616" src={logo14} alt="New Balance" />
          </a>
        </div>
    </div>
  </div>
);

export default Inventory;