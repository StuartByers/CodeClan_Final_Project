import React from "react";
import { Link } from "react-router-dom";
import logo5yzy from "./logo5yzy.png";
import logo10 from "./Retailors/nike.png";
import logo11 from "./Retailors/adidas.png";
import logo12 from "./Retailors/yeezy.png";
import logo13 from "./Retailors/jordan.png";
import logo14 from "./Retailors/nb.png";
import logo15 from "./Retailors/stockx.png";
import './YzyInventory.css';

const YzyInventory = () => (
  <div className="main-container5yzy">
    <div className="top-container5yzy">
      <div className="user-container5yzy">
        <div className="user-info-container5yzy">
          <p className="user-login5yzy">SIGNED IN - USER 0001</p>
          <div className="links-container5yzy">
            <Link to="/update" className="update-link5yzy">UPDATE</Link>
            <div className="separator5yzy"></div>
            <Link to="/" className="signout-link5yzy">SIGN OUT</Link>
          </div>
        </div>
      </div>
      <div className="content-container5yzy">
        <div className="header-container5yzy">
          <div className="controller-container5yzy">  
            <img className="logo5yzy" src={logo5yzy} alt="Logo" />
            <div className="link-container5yzy">
                <Link to="/main" className="link55yzy">NEWS</Link>
              <Link to="/calendar" className="link55yzy">CALENDAR</Link>
              <Link to="/inventory" className="link5yzy">INVENTORY</Link>
              <Link to="/salesinventory" className="link55yzy">SALES</Link>
              <Link className="link555yzy">ANALYTICS</Link>
            </div>
          </div>
        </div>
        <div className="separator-line55yzy"></div>
      </div>
      <div className="middle-container5yzy">
        <div className="dashboard-container5yzy">
        <div className="stats-container5yzy">
          <div className="button-container5yzy">
            <p className="add-title5yzy">ADD SNEAKER</p>
              <button className="add-button5yzy"><Link to="/addinventory">+</Link></button>
          </div>
          <div className="filter-bar-container5616yzy">
            <select id="menu" class="dropdown5616yzy">
              <option value="All">All</option>
              <option value="Adidas">Adidas</option>
              <option value="Nike">Nike</option>
              <option value="Yeezy">Yeezy</option>
              <option value="Jordan Brand">Jordan Brand</option>
              <option value="New Balance">New Balance</option>
            </select>
            <div className="filter-button-container5616new">
              <button className="filter-button5616new"><Link to="/newinventory">SELECT</Link></button>
            </div>
            <div className="filter-button-container5616new">
              <button className="filter-button5616new"><Link to="/inventory">CLEAR</Link></button>
            </div>
          </div>
          <div className="invent5yzy">
              <div className="invent-title-box5yzy">
                <div className="invent-title5yzy">INVENTORY</div>
              </div>
              <div className="number01-box5yzy">
                <div className="count015yzy">0001</div>
              </div>
            </div>
          <div className="stats-separator015yzy"></div>
            <div className="value5yzy">
              <div className="value-title-box5yzy">
                <div className="value-title5yzy">VALUE</div>
              </div>
              <div className="number02-box5yzy">
                <div className="count025yzy">0200</div>
              </div>
            </div>
          <div className="stats-separator025yzy"></div>
            <div className="resold5yzy">
              <div className="resold-title-box5yzy">
                <div className="resold-title5yzy">RESOLD</div>
              </div>
              <div className="number03-box5yzy">
                <div className="count035yzy">0000</div>
              </div>
            </div>
          <div className="stats-separator035yzy"></div>
            <div className="profit5yzy">
              <div className="profit-title-box5yzy">
                <div className="profit-title5yzy">PROFIT</div>
              </div>
              <div className="number04-box5yzy">
                <div className="count045yzy">0000</div>
              </div>
            </div>
          </div>
          <div className="separator-line555yzy"></div>
        </div>
        <div className="body-container5yzy">
          <div className="added-sneaker-frame5yzy">
            <div className="added-sneaker-container5yzy">
              <div className="added-sneaker-header5yzy">
                <img className="yeezy5yzy" src={logo12} alt="Yeezy"></img>
                <div className="added-sneaker-pic5yzy"></div>
                <div className="added-sneaker-info5yzy">
                  <p className="added-sneaker-brand5yzy">Yeezy</p>
                  <p className="added-sneaker-model5yzy">Yeezy Boost 350 v2 Zebra</p>
                  <p className="added-sneaker-size5yzy">US Mens 10 / UK Mens 9</p>
                  <p className="added-sneaker-price5yzy">200</p>
                </div>
                <div className="added-sneaker-buttons5yzy">
                  <a href="/picinventory" className="hold-sneaker-link5yzy">EDIT</a>
                    <div className="separator55555yzy"></div>
                  <a href="/inventory" className="list-sneaker-link5yzy">DELETE</a>
                    <div className="separator55555yzy"></div>
                  <Link to="/salesinventory" className="sold-sneaker-link5yzy">SOLD</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-container5yzy">
        <div className="retailor-container5yzy">
          <a href="https://stockx.com" target="_blank" rel="noopener noreferrer">
            <img className="stockx5yzy" src={logo15} alt="StockX" />
          </a>
          <a href="https://adidas.com" target="_blank" rel="noopener noreferrer">
            <img className="adidas5yzy" src={logo11} alt="Adidas" />
          </a>
          <a href="https://nike.com" target="_blank" rel="noopener noreferrer">
            <img className="nike5yzy" src={logo10} alt="Nike" />
          </a>
          <a href="https://www.adidas.co.uk/yeezy" target="_blank" rel="noopener noreferrer">
            <img className="yeezy5yzy" src={logo12} alt="Yeezy" />
          </a>
          <a href="https://www.nike.com/jordan" target="_blank" rel="noopener noreferrer">
            <img className="jordan5yzy" src={logo13} alt="Jordan" />
          </a>
          <a href="https://www.newbalance.com" target="_blank" rel="noopener noreferrer">
            <img className="new-balance5yzy" src={logo14} alt="New Balance" />
          </a>
        </div>
    </div>
  </div>
);

export default YzyInventory;