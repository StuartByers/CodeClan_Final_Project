import React from "react";
import { Link } from "react-router-dom";
import logo5 from "./logo5.png";
import logo10 from "./Retailors/nike.png";
import logo11 from "./Retailors/adidas.png";
import logo12 from "./Retailors/yeezy.png";
import logo13 from "./Retailors/jordan.png";
import logo14 from "./Retailors/nb.png";
import logo15 from "./Retailors/stockx.png";
import logo16 from "./airjordan.png";
import './FilledInventory.css';

const FilledInventory = () => (
  <div className="main-container5">
    <div className="top-container5">
      <div className="user-container5">
        <div className="user-info-container5">
          <p className="user-login5">SIGNED IN - USER 0001</p>
          <div className="links-container5">
            <Link to="/update" className="update-link5">UPDATE</Link>
            <div className="separator5"></div>
            <Link to="/" className="signout-link5">SIGN OUT</Link>
          </div>
        </div>
      </div>
      <div className="content-container5">
        <div className="header-container5">
          <div className="controller-container5">  
            <img className="logo5" src={logo5} alt="Logo" />
            <div className="link-container5">
                <Link to="/main" className="link55">NEWS</Link>
              <Link to="/calendar" className="link55">CALENDAR</Link>
              <Link to="/inventory" className="link5">INVENTORY</Link>
              <Link to="/salesinventory" className="link55">SALES</Link>
              <Link className="link555">ANALYTICS</Link>
            </div>
          </div>
        </div>
        <div className="separator-line55"></div>
      </div>
      <div className="middle-container5">
        <div className="dashboard-container5">
        <div className="stats-container5">
          <div className="button-container5">
            <p className="add-title5">ADD SNEAKER</p>
              <button className="add-button5"><Link to="/addinventory">+</Link></button>
          </div>
          <div className="filter-bar-container5616l">
            <select id="menu" class="dropdown5616l">
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
          <div className="invent5">
              <div className="invent-title-box5">
                <div className="invent-title5">INVENTORY</div>
              </div>
              <div className="number01-box5">
                <div className="count015">0001</div>
              </div>
            </div>
          <div className="stats-separator015"></div>
            <div className="value5">
              <div className="value-title-box5">
                <div className="value-title5">VALUE</div>
              </div>
              <div className="number02-box5">
                <div className="count025">0189</div>
              </div>
            </div>
          <div className="stats-separator025"></div>
            <div className="resold5">
              <div className="resold-title-box5">
                <div className="resold-title5">RESOLD</div>
              </div>
              <div className="number03-box5">
                <div className="count035">0000</div>
              </div>
            </div>
          <div className="stats-separator035"></div>
            <div className="profit5">
              <div className="profit-title-box5">
                <div className="profit-title5">PROFIT</div>
              </div>
              <div className="number04-box5">
                <div className="count045">0000</div>
              </div>
            </div>
          </div>
          <div className="separator-line555"></div>
        </div>
        <div className="body-container5">
          <div className="added-sneaker-frame5">
            <div className="added-sneaker-container5">
              <div className="added-sneaker-header5">
                <img className="added-sneaker-logo5" src={logo16} alt="Jumpman"></img>
                <div className="added-sneaker-pic5"></div>
                <div className="added-sneaker-info5">
                  <p className="added-sneaker-brand5">Jordan Brand</p>
                  <p className="added-sneaker-model5">Air Jordan 3 White Cement Reimagined</p>
                  <p className="added-sneaker-size5">US Mens 10 / UK Mens 9</p>
                  <p className="added-sneaker-price5">£189</p>
                </div>
                <div className="added-sneaker-buttons5">
                  <a href="/picinventory" className="hold-sneaker-link5">EDIT</a>
                    <div className="separator55555"></div>
                  <a href="/inventory" className="list-sneaker-link5">DELETE</a>
                    <div className="separator55555"></div>
                  <Link to="/inventory" className="sold-sneaker-link5">SOLD</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-container5">
        <div className="retailor-container5">
          <a href="https://stockx.com" target="_blank" rel="noopener noreferrer">
            <img className="stockx5" src={logo15} alt="StockX" />
          </a>
          <a href="https://adidas.com" target="_blank" rel="noopener noreferrer">
            <img className="adidas5" src={logo11} alt="Adidas" />
          </a>
          <a href="https://nike.com" target="_blank" rel="noopener noreferrer">
            <img className="nike5" src={logo10} alt="Nike" />
          </a>
          <a href="https://www.adidas.co.uk/yeezy" target="_blank" rel="noopener noreferrer">
            <img className="yeezy5" src={logo12} alt="Yeezy" />
          </a>
          <a href="https://www.nike.com/jordan" target="_blank" rel="noopener noreferrer">
            <img className="jordan5" src={logo13} alt="Jordan" />
          </a>
          <a href="https://www.newbalance.com" target="_blank" rel="noopener noreferrer">
            <img className="new-balance5" src={logo14} alt="New Balance" />
          </a>
        </div>
    </div>
  </div>
);

export default FilledInventory;