import React from "react";
import { Link } from "react-router-dom";
import logo3 from "./logo3.png";
import logo4 from "./Retailors/stockx.png";
import logo10 from "./Retailors/nike.png";
import logo11 from "./Retailors/adidas.png";
import logo12 from "./Retailors/yeezy.png";
import logo13 from "./Retailors/jordan.png";
import logo14 from "./Retailors/nb.png";
import './Main.css';

const Main = () => (
  <div className="main-container3">
    <div className="top-container3">
      <div className="user-container3">
        <div className="user-info-container3">
          <p className="user-login3">SIGNED IN - USER 0001</p>
          <div className="links-container3">
            <Link to="/update" className="update-link3">UPDATE</Link>
            <div className="separator3"></div>
            <Link to="/" className="signout-link3">SIGN OUT</Link>
          </div>
        </div>
      </div>
      <div className="content-container3">
        <div className="header-container3">
          <div className="controller-container3">  
            <img className="logo3" src={logo3} alt="Logo" />
            <div className="link-container3">
                <Link to="/main" className="link3">NEWS</Link>
              <Link to="/calendar" className="link33">CALENDAR</Link>
              <Link to="/inventory" className="link33">INVENTORY</Link>
              <Link className="link33">SALES</Link>
              <Link className="link333">ANALYTICS</Link>
            </div>
          </div>
        </div>
        <div className="separator-line33"></div>
      </div>
      <div className="middle-container3">
        <div className="dashboard-container3">
          <div className="stats-container3">
          <div className="invent3">
              <div className="invent-title-box3">
                <div className="invent-title3">INVENTORY</div>
              </div>
              <div className="number01-box3">
                <div className="count013">0002</div>
              </div>
            </div>
          <div className="stats-separator013"></div>
            <div className="value3">
              <div className="value-title-box3">
                <div className="value-title3">VALUE</div>
              </div>
              <div className="number02-box3">
                <div className="count023">0350</div>
              </div>
            </div>
          <div className="stats-separator023"></div>
            <div className="resold3">
              <div className="resold-title-box3">
                <div className="resold-title3">RESOLD</div>
              </div>
              <div className="number03-box3">
                <div className="count033">0000</div>
              </div>
            </div>
          <div className="stats-separator033"></div>
            <div className="profit3">
              <div className="profit-title-box3">
                <div className="profit-title3">PROFIT</div>
              </div>
              <div className="number04-box3">
                <div className="count043">0000</div>
              </div>
            </div>
          </div>
          <div className="separator-line333"></div>
        </div>
        <div className="body-container3">
        <div class="box3333">
          <div className="news-column1">
            <div className="news-block1">
              <div  className="news-logo1"></div>
            </div>
            <div className="news-block12">
              <div className="news-logo12"></div>
            </div>
            <div className="retailor-row1">
              <div className="retailor-block1">
                <div className="retailor-logo117"></div>
              </div>
              <div className="retailor-block12">
              <div className="retailor-logo127"></div>
              </div>
            </div>
          </div>
          <div className="news-column2">
            <div className="news-block2">
              <div className="news-logo2"></div>
            </div>
            <div className="news-block22">
              <div className="news-logo22"></div>
              </div>
            <div className="retailor-row2">
              <div className="retailor-block2">
                <div className="retailor-logo217"></div>
              </div>
              <div className="retailor-block22">
              <div className="retailor-logo227"></div>
              </div>
            </div>
          </div>
          <div className="news-column3">
            <a href="https://thesolesupplier.co.uk/release-dates/nike/air-jordan-3/air-jordan-3-white-cement-reimagined/" target="_blank" rel="noopener noreferrer" className="news-block3">
              <div className="news-logo3"></div>
            </a>
            <div className="news-block33">
              <div className="news-logo33"></div>
              </div>
            <div className="retailor-row3">
              <div className="retailor-block3">
                <div className="retailor-logo317"></div>
              </div>
              <div className="retailor-block32">
              <div className="retailor-logo327"></div>
              </div>
            </div>
          </div>
        </div>
          <div className="box2333">
            <div className="dec-title-box3">
              <div className="dec-title-words3">DECEMBER</div>
            </div>
          </div>
            <div className="box1333"></div>
              <div className="box0333">
                <div className="box4333"></div></div>
          <div className="sneaker-month-container3">
            <div className="sneaker-month013">
              <div className="sneaker-month-pic13"></div>
              <div className="sneaker-month-info13">
                <p className="sneaker-release-model13">Air Jordan 1 High OG Lost and Found</p>
                <p className="sneaker-release-info13">£165 / 08.12.23 / Nike.com</p>
              </div>
            </div>
            <div className="sneaker-month023">
              <div className="sneaker-month-pic23"></div>
              <div className="sneaker-month-info23">
                <p className="sneaker-release-model23">Adidas Yeezy 700v1 Waverunner</p>
                <p className="sneaker-release-info23">£250 / 15.12.23 / Adidas.com</p>
              </div>
            </div>
            <div className="sneaker-month033">
              <div className="sneaker-month-pic33"></div>
              <div className="sneaker-month-info33">
                <p className="sneaker-release-model33">New Balance 2002r Protection Pack</p>
                <p className="sneaker-release-info33">£150 / 22.12.23 / newbalance.com</p>
              </div>
            </div>
            <div className="sneaker-month043">
              <div className="sneaker-month-pic43"></div>
              <div className="sneaker-month-info43">
                <p className="sneaker-release-model43">Concepts x Nike SB Dunk Orange Lobster</p>
                <p className="sneaker-release-info43">£109 / 25.12.23 / Nike.com</p>
              </div>
            </div>
            <div className="sneaker-month053">
              <div className="sneaker-month-pic53"></div>
              <div className="sneaker-month-info53">
                <p className="sneaker-release-model53">Adidas Performance FutureCraft 4D</p>
                <p className="sneaker-release-info53">£190 / 31.12.23 / Adidas.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-container3">
        <div className="retailor-container3">
          <a href="https://stockx.com" target="_blank" rel="noopener noreferrer">
            <img className="stockx3" src={logo4} alt="StockX" />
          </a>
          <a href="https://adidas.com" target="_blank" rel="noopener noreferrer">
            <img className="adidas3" src={logo11} alt="Adidas" />
          </a>
          <a href="https://www.nike.com/launch?s=upcoming" target="_blank" rel="noopener noreferrer">
            <img className="nike3" src={logo10} alt="Nike" />
          </a>
          <a href="https://www.adidas.co.uk/yeezy" target="_blank" rel="noopener noreferrer">
            <img className="yeezy3" src={logo12} alt="Yeezy" />
          </a>
          <a href="https://www.nike.com/jordan" target="_blank" rel="noopener noreferrer">
            <img className="jordan3" src={logo13} alt="Jordan" />
          </a>
          <a href="https://www.newbalance.com" target="_blank" rel="noopener noreferrer">
            <img className="new-balance3" src={logo14} alt="New Balance" />
          </a>
        </div>
    </div>
  </div>
);

export default Main;