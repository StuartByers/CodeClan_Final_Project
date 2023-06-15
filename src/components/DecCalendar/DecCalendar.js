import React from "react";
import { Link } from "react-router-dom";
import logo4975 from "./logo4975.png";
import logo15 from "./Retailors/stockx.png";
import logo10 from "./Retailors/nike.png";
import logo11 from "./Retailors/adidas.png";
import logo12 from "./Retailors/yeezy.png";
import logo13 from "./Retailors/jordan.png";
import logo14 from "./Retailors/nb.png";
import './DecCalendar.css';

const DecCalendar = () => (
  <div className="main-container4975">
    <div className="top-container4975">
      <div className="user-container4975">
        <div className="user-info-container4975">
          <p className="user-login4975">SIGNED IN - USER 0001</p>
          <div className="links-container4975">
            <Link to="/update" className="update-link4975">UPDATE</Link>
            <div className="separator4975"></div>
            <Link to="/" className="signout-link4975">SIGN OUT</Link>
          </div>
        </div>
      </div>
      <div className="content-container4975">
        <div className="header-container4975">
          <div className="controller-container4975">  
            <img className="logo4975" src={logo4975} alt="Logo" />
            <div className="link-container4975">
                <Link to="/main" className="link44975">NEWS</Link>
              <Link to="/calendar" className="link4975">CALENDAR</Link>
              <Link to="/newinventory" className="link44975">INVENTORY</Link>
              <Link className="link44975">SALES</Link>
              <Link className="link444975">ANALYTICS</Link>
            </div>
          </div>
        </div>
        <div className="separator-line44975"></div>
      </div>
      <div className="middle-container4975">
        <div className="dashboard-container4975">
        <div className="stats-container4975">
          <div className="box1234975">
            <div className="month-select-title4975">SELECT MONTH</div>
          </div>
          <div className="box5678975">
            <button className="month-button4975">JAN</button>
            <button className="month-button4975">FEB</button>
            <button className="month-button4975">MAR</button>
            <button className="month-button4975">APR</button>
            <button className="month-button4975">MAY</button>
            <button className="month-button4975">JUN</button>
            <button className="month-button4975">JUL</button>
            <button className="month-button4975">AUG</button>
            <button className="month-button4975">SEP</button>
            <button className="month-button4975">OCT</button>
            <button className="month-button4975">NOV</button>
            <button className="month-button428975"><Link to="/filledcalendar">DEC</Link></button>
          </div>
          <div className="invent4975">
              <div className="invent-title-box4975">
                <div className="invent-title4975">INVENTORY</div>
              </div>
              <div className="number01-box4975">
                <div className="count014975">0002</div>
              </div>
            </div>
          <div className="stats-separator014975"></div>
            <div className="value4975">
              <div className="value-title-box4975">
                <div className="value-title4975">VALUE</div>
              </div>
              <div className="number02-box4975">
                <div className="count024975">0350</div>
              </div>
            </div>
          <div className="stats-separator024975"></div>
            <div className="resold4975">
              <div className="resold-title-box4975">
                <div className="resold-title4975">RESOLD</div>
              </div>
              <div className="number03-box4075">
                <div className="count034975">0000</div>
              </div>
            </div>
          <div className="stats-separator034975"></div>
            <div className="profit4975">
              <div className="profit-title-box4975">
                <div className="profit-title4975">PROFIT</div>
              </div>
              <div className="number04-box4975">
                <div className="count044975">0000</div>
              </div>
            </div>
          </div>
          <div className="separator-line444975"></div>
        </div>
        <div className="body-container4975">
          <div className="date-rows-container975">
            <div className="date-row14975">
              <div className="date-box104975">
                <div className="control-container104975">
                  <div className="day-num-box104975">
                    <div className="day-num104975">DEC / 1</div>
                  </div>
                  <button className="cal-add-button104975"><Link to="/addcalendar">+</Link></button>
                  <button className="cal-sub-button104975"><Link to="/calendar">-</Link></button>
                </div>
              </div>
              <div className="date-box14975">
                <div className="control-container14975">
                  <div className="day-num-box14975">
                    <div className="day-num104975">DEC / 2</div>
                  </div>
                  <button className="cal-add-button14975"><Link to="/addcalendar">+</Link></button>
                  <button className="cal-sub-button14975"><Link to="/calendar">-</Link></button>
                </div>
              </div>
                <div className="date-box14975">
                  <div className="control-container14975">
                    <div className="day-num-box14975">
                      <div className="day-num104975">DEC / 3</div>
                    </div>
                    <button className="cal-add-button14975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button14975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box14975">
                  <div className="control-container14975">
                    <div className="day-num-box14975">
                      <div className="day-num104975">DEC / 4</div>
                    </div>
                    <button className="cal-add-button14975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button14975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box14975">
                  <div className="control-container14975">
                    <div className="day-num-box14975">
                      <div className="day-num104975">DEC / 5</div>
                    </div>
                    <button className="cal-add-button14975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button14975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box14975">
                  <div className="control-container14975">
                    <div className="day-num-box14975">
                      <div className="day-num104975">DEC / 6</div>
                    </div>
                    <button className="cal-add-button14975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button14975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box14975">
                  <div className="control-container14975">
                    <div className="day-num-box14975">
                      <div className="day-num104975">DEC / 7</div>
                    </div>
                    <button className="cal-add-button14975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button14975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
              </div>
              <div className="date-row24975">
                <div className="date-box024975">
                  <div className="control-container024975">
                    <div className="day-num-box024975">
                      <div className="day-num024975">DEC / 8</div>
                    </div>
                  <button className="cal-add-button024975"><Link to="/addcalendar">+</Link></button>
                  <button className="cal-sub-button024975"><Link to="/calendar">-</Link></button>
              </div>
                </div>
                  <div className="date-box24975">
                    <div className="control-container24975">
                      <div className="day-num-box24975">
                        <div className="day-num24975">DEC / 9</div>
                    </div>
                    <button className="cal-add-button24975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button24975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box24975">
                  <div className="control-container24975">
                    <div className="day-num-box24975">
                      <div className="day-num24975">DEC / 10</div>
                    </div>
                    <button className="cal-add-button24975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button24975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box24975">
                  <div className="control-container24975">
                    <div className="day-num-box24975">
                      <div className="day-num24975">DEC / 11</div>
                    </div>
                    <button className="cal-add-button24975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button24975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box24975">
                  <div className="control-container24975">
                    <div className="day-num-box24975">
                      <div className="day-num24975">DEC / 12</div>
                    </div>
                    <button className="cal-add-button24975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button24975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box24975">
                  <div className="control-container24975">
                    <div className="day-num-box24975">
                      <div className="day-num24975">DEC / 13</div>
                    </div>
                    <button className="cal-add-button24975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button24975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box24975">
                  <div className="control-container24975">
                    <div className="day-num-box24975">
                      <div className="day-num24975">DEC / 14</div>
                    </div>
                    <button className="cal-add-button24975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button24975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
              </div>
              <div className="date-row34975">
                <div className="date-box034975">
                  <div className="control-container034975">
                    <div className="day-num-box034975">
                      <div className="day-num034975">DEC / 15</div>
                    </div>
                  <button className="cal-add-button034975"><Link to="/addcalendar">+</Link></button>
                  <button className="cal-sub-button034975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box34975">
                  <div className="control-container34975">
                    <div className="day-num-box34975">
                      <div className="day-num34975">DEC / 16</div>
                    </div>
                    <button className="cal-add-button34975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button34975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box34975">
                  <div className="control-container24975">
                    <div className="day-num-box24975">
                      <div className="day-num24975">DEC / 17</div>
                    </div>
                    <button className="cal-add-button24975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button24975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box34975">
                  <div className="control-container24975">
                    <div className="day-num-box24975">
                      <div className="day-num24975">DEC / 18</div>
                    </div>
                    <button className="cal-add-button24975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button24975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box34975">
                  <div className="control-container24975">
                    <div className="day-num-box24975">
                      <div className="day-num24975">DEC / 19</div>
                    </div>
                    <button className="cal-add-button24975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button24975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box34975">
                  <div className="control-container24975">
                    <div className="day-num-box24975">
                      <div className="day-num24975">DEC / 20</div>
                    </div>
                    <button className="cal-add-button24975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button24975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box34975">
                  <div className="control-container24975">
                    <div className="day-num-box24975">
                      <div className="day-num24975">DEC / 21</div>
                    </div>
                    <button className="cal-add-button24975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button24975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
              </div>
              <div className="date-row44975">
                <div className="date-box044975">
                  <div className="control-container044975">
                    <div className="day-num-box044975">
                      <div className="day-num044975">DEC / 22</div>
                    </div>
                    <button className="cal-add-button044975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button044975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box44975">
                  <div className="control-container44975">
                    <div className="day-num-box44975">
                      <div className="day-num44975">DEC / 23</div>
                    </div>
                    <button className="cal-add-button44975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button44975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box44975">
                  <div className="control-container44975">
                    <div className="day-num-box44975">
                      <div className="day-num44975">DEC / 24</div>
                    </div>
                    <button className="cal-add-button44975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button44975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box44975">
                  <div className="control-container44975">
                    <div className="day-num-box44975">
                      <div className="day-num44975">DEC / 25</div>
                    </div>
                    <button className="cal-add-button44975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button44975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box44975">
                  <div className="control-container44975">
                    <div className="day-num-box44975">
                      <div className="day-num44975">DEC / 26</div>
                    </div>
                    <button className="cal-add-button44975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button44975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box44975">
                  <div className="control-container44975">
                    <div className="day-num-box44975">
                      <div className="day-num44975">DEC / 27</div>
                    </div>
                    <button className="cal-add-button44975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button44975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box44975">
                  <div className="control-container44975">
                    <div className="day-num-box44975">
                      <div className="day-num44975">DEC / 28</div>
                    </div>
                    <button className="cal-add-button44975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button44975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
              </div>
              <div className="date-row54975">
              <div className="date-box054975">
                  <div className="control-container054975">
                    <div className="day-num-box054975">
                      <div className="day-num054975">DEC / 29</div>
                    </div>
                    <button className="cal-add-button054975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button054975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box54975">
                <div className="control-container54975">
                    <div className="day-num-box54975">
                      <div className="day-num54975">DEC / 30</div>
                    </div>
                    <button className="cal-add-button54975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button54975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box54975">
                <div className="control-container54975">
                    <div className="day-num-box54975">
                      <div className="day-num54975">DEC / 31</div>
                    </div>
                    <button className="cal-add-button54975"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button54975"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-container4975">
        <div className="retailor-container4975">
          <a href="https://stockx.com" target="_blank" rel="noopener noreferrer">
            <img className="stockx4975" src={logo15} alt="StockX" />
          </a>
          <a href="https://adidas.com" target="_blank" rel="noopener noreferrer">
            <img className="adidas4975" src={logo11} alt="Adidas" />
          </a>
          <a href="https://nike.com" target="_blank" rel="noopener noreferrer">
            <img className="nike4975" src={logo10} alt="Nike" />
          </a>
          <a href="https://www.adidas.co.uk/yeezy" target="_blank" rel="noopener noreferrer">
            <img className="yeezy4975" src={logo12} alt="Yeezy" />
          </a>
          <a href="https://www.nike.com/jordan" target="_blank" rel="noopener noreferrer">
            <img className="jordan4975" src={logo13} alt="Jordan" />
          </a>
          <a href="https://www.newbalance.com" target="_blank" rel="noopener noreferrer">
            <img className="new-balance4975" src={logo14} alt="New Balance" />
          </a>
        </div>
    </div>
  </div>
);

export default DecCalendar;