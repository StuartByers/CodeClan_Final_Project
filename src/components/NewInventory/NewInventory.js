import React from "react";
import { Link } from "react-router-dom";
import logo5new from "./logo5new.png";
import logonewbala from "./newbala.png"
import logo10 from "./Retailors/nike.png";
import logo11 from "./Retailors/adidas.png";
import logo12 from "./Retailors/yeezy.png";
import logo13 from "./Retailors/jordan.png";
import logo14 from "./Retailors/nb.png";
import logo15 from "./Retailors/stockx.png";
import './NewInventory.css';

const NewInventory = () => (
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
      <div className="content-container5new">
        <div className="header-container5new">
          <div className="controller-container5new">  
            <img className="logo5new" src={logo5new} alt="Logo" />
            <div className="link-container5new">
                <Link to="/main" className="link55new">NEWS</Link>
              <Link to="/calendar" className="link55new">CALENDAR</Link>
              <Link to="/inventory" className="link5new">INVENTORY</Link>
              <Link to="/salesinventory" className="link55new">SALES</Link>
              <Link className="link555new">ANALYTICS</Link>
            </div>
          </div>
        </div>
        <div className="separator-line55new"></div>
      </div>
      <div className="middle-container5new">
        <div className="dashboard-container5new">
        <div className="stats-container5new">
          <div className="button-container5new">
            <p className="add-title5new">ADD SNEAKER</p>
              <button className="add-button5new"><Link to="/addinventory">+</Link></button>
          </div>
          <div className="filter-bar-container5616new">
            <select id="menu" class="dropdown5616new">
              <option value="All">All</option>
              <option value="Adidas">Adidas</option>
              <option value="Nike">Nike</option>
              <option value="Yeezy">Yeezy</option>
              <option value="Jordan Brand">Jordan Brand</option>
              <option value="New Balance">New Balance</option>
            </select>
            <div className="filter-button-container5616new">
              <button className="filter-button5616new"><Link to="/yzyinventory">SELECT</Link></button>
            </div>
            <div className="filter-button-container5616new">
              <button className="filter-button5616new"><Link to="/inventory">CLEAR</Link></button>
            </div>
          </div>
          <div className="invent5new">
              <div className="invent-title-box5new">
                <div className="invent-title5new">INVENTORY</div>
              </div>
              <div className="number01-box5new">
                <div className="count015new">0002</div>
              </div>
            </div>
          <div className="stats-separator015new"></div>
            <div className="value5new">
              <div className="value-title-box5new">
                <div className="value-title5new">VALUE</div>
              </div>
              <div className="number02-box5yzy">
                <div className="count025new">0350</div>
              </div>
            </div>
          <div className="stats-separator025new"></div>
            <div className="resold5new">
              <div className="resold-title-box5new">
                <div className="resold-title5new">RESOLD</div>
              </div>
              <div className="number03-box5new">
                <div className="count035new">0000</div>
              </div>
            </div>
          <div className="stats-separator035new"></div>
            <div className="profit5new">
              <div className="profit-title-box5new">
                <div className="profit-title5new">PROFIT</div>
              </div>
              <div className="number04-box5new">
                <div className="count045new">0000</div>
              </div>
            </div>
          </div>
          <div className="separator-line555new"></div>
        </div>
        <div className="body-container5new">
        <div className="added-sneaker-frame5new456">
            <div className="added-sneaker-container5new456">
              <div className="added-sneaker-header5new456">
                <img className="yeezy5yzy" src={logo12} alt="Yeezy"></img>
                <div className="added-sneaker-pic5new456"></div>
                <div className="added-sneaker-info5new456">
                  <p className="added-sneaker-brand5new456">Yeezy</p>
                  <p className="added-sneaker-model5new456">Yeezy Boost 350 v2 Zebra</p>
                  <p className="added-sneaker-size5new456">US Mens 10 / UK Mens 9</p>
                  <p className="added-sneaker-price5new456">200</p>
                </div>
                <div className="added-sneaker-buttons5new">
                  <a href="/picinventory" className="hold-sneaker-link5new">EDIT</a>
                    <div className="separator55555new"></div>
                  <a href="/inventory" className="list-sneaker-link5new456">DELETE</a>
                    <div className="separator55555new"></div>
                  <Link to="/salesinventory" className="sold-sneaker-link5new456">SOLD</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="added-sneaker-frame5new">
            <div className="added-sneaker-container5new">
              <div className="added-sneaker-header5new">
                <img className="yeezy5yzy" src={logonewbala} alt="Yeezy"></img>
                <div className="added-sneaker-pic5new"></div>
                <div className="added-sneaker-info5new">
                  <p className="added-sneaker-brand5new">New Balance</p>
                  <p className="added-sneaker-model5new">2002R Protection Pack Navy Grey</p>
                  <p className="added-sneaker-size5new">US Mens 11 / UK Mens 11.5</p>
                  <p className="added-sneaker-price5new">£150</p>
                </div>
                <div className="added-sneaker-buttons5new">
                  <a href="/picinventory" className="hold-sneaker-link5new">EDIT</a>
                    <div className="separator55555new"></div>
                  <a href="/inventory" className="list-sneaker-link5new">DELETE</a>
                    <div className="separator55555new"></div>
                  <Link to="/salesinventory" className="sold-sneaker-link5new">SOLD</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-container5new">
        <div className="retailor-container5new">
          <a href="https://stockx.com" target="_blank" rel="noopener noreferrer">
            <img className="stockx5new" src={logo15} alt="StockX" />
          </a>
          <a href="https://adidas.com" target="_blank" rel="noopener noreferrer">
            <img className="adidas5new" src={logo11} alt="Adidas" />
          </a>
          <a href="https://nike.com" target="_blank" rel="noopener noreferrer">
            <img className="nike5new" src={logo10} alt="Nike" />
          </a>
          <a href="https://www.adidas.co.uk/yeezy" target="_blank" rel="noopener noreferrer">
            <img className="yeezy5new" src={logo12} alt="Yeezy" />
          </a>
          <a href="https://www.nike.com/jordan" target="_blank" rel="noopener noreferrer">
            <img className="jordan5new" src={logo13} alt="Jordan" />
          </a>
          <a href="https://www.newbalance.com" target="_blank" rel="noopener noreferrer">
            <img className="new-balance5new" src={logo14} alt="New Balance" />
          </a>
        </div>
    </div>
  </div>
);

export default NewInventory;