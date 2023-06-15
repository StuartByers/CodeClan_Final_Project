import React from "react";
import { Link } from "react-router-dom";
import logo4 from "./logo4.png";
import logo15 from "./Retailors/stockx.png";
import logo10 from "./Retailors/nike.png";
import logo11 from "./Retailors/adidas.png";
import logo12 from "./Retailors/yeezy.png";
import logo13 from "./Retailors/jordan.png";
import logo14 from "./Retailors/nb.png";
import './Calendar.css';

const Calendar = () => (
  <div className="main-container4">
    <div className="top-container4">
      <div className="user-container4">
        <div className="user-info-container4">
          <p className="user-login4">SIGNED IN - USER 0001</p>
          <div className="links-container4">
            <Link to="/update" className="update-link4">UPDATE</Link>
            <div className="separator4"></div>
            <Link to="/" className="signout-link4">SIGN OUT</Link>
          </div>
        </div>
      </div>
      <div className="content-container4">
        <div className="header-container4">
          <div className="controller-container4">  
            <img className="logo4" src={logo4} alt="Logo" />
            <div className="link-container4">
                <Link to="/main" className="link44">NEWS</Link>
              <Link to="/calendar" className="link4">CALENDAR</Link>
              <Link to="/inventory" className="link44">INVENTORY</Link>
              <Link className="link44">SALES</Link>
              <Link className="link444">ANALYTICS</Link>
            </div>
          </div>
        </div>
        <div className="separator-line44"></div>
      </div>
      <div className="middle-container4">
        <div className="dashboard-container4">
        <div className="stats-container4">
          <div className="box1234">
            <div className="month-select-title4">SELECT MONTH</div>
          </div>
          <div className="box5678">
            <button className="month-button428">JAN</button>
            <button className="month-button4">FEB</button>
            <button className="month-button4">MAR</button>
            <button className="month-button4">APR</button>
            <button className="month-button4">MAY</button>
            <button className="month-button4">JUN</button>
            <button className="month-button4">JUL</button>
            <button className="month-button4">AUG</button>
            <button className="month-button4">SEP</button>
            <button className="month-button4">OCT</button>
            <button className="month-button4">NOV</button>
            <button className="month-button4"><Link to="/deccalendar">DEC</Link></button>
          </div>
          <div className="invent4">
              <div className="invent-title-box4">
                <div className="invent-title4">INVENTORY</div>
              </div>
              <div className="number01-box4">
                <div className="count014">0002</div>
              </div>
            </div>
          <div className="stats-separator014"></div>
            <div className="value4">
              <div className="value-title-box4">
                <div className="value-title4">VALUE</div>
              </div>
              <div className="number02-box4">
                <div className="count024">0350</div>
              </div>
            </div>
          <div className="stats-separator024"></div>
            <div className="resold4">
              <div className="resold-title-box4">
                <div className="resold-title4">RESOLD</div>
              </div>
              <div className="number03-box4">
                <div className="count034">0000</div>
              </div>
            </div>
          <div className="stats-separator034"></div>
            <div className="profit4">
              <div className="profit-title-box4">
                <div className="profit-title4">PROFIT</div>
              </div>
              <div className="number04-box4">
                <div className="count044">0000</div>
              </div>
            </div>
          </div>
          <div className="separator-line444"></div>
        </div>
        <div className="body-container4">
          <div className="date-rows-container">
            <div className="date-row14">
              <div className="date-box104">
                <div className="control-container104">
                  <div className="day-num-box104">
                    <div className="day-num104">JAN / 1</div>
                  </div>
                  <button className="cal-add-button104"><Link to="/addcalendar">+</Link></button>
                  <button className="cal-sub-button104"><Link to="/calendar">-</Link></button>
                </div>
              </div>
              <div className="date-box14">
                <div className="control-container14">
                  <div className="day-num-box14">
                    <div className="day-num104">JAN / 2</div>
                  </div>
                  <button className="cal-add-button14"><Link to="/addcalendar">+</Link></button>
                  <button className="cal-sub-button14"><Link to="/calendar">-</Link></button>
                </div>
              </div>
                <div className="date-box14">
                  <div className="control-container14">
                    <div className="day-num-box14">
                      <div className="day-num104">JAN / 3</div>
                    </div>
                    <button className="cal-add-button14"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button14"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box14">
                  <div className="control-container14">
                    <div className="day-num-box14">
                      <div className="day-num104">JAN / 4</div>
                    </div>
                    <button className="cal-add-button14"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button14"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box14">
                  <div className="control-container14">
                    <div className="day-num-box14">
                      <div className="day-num104">JAN / 5</div>
                    </div>
                    <button className="cal-add-button14"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button14"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box14">
                  <div className="control-container14">
                    <div className="day-num-box14">
                      <div className="day-num104">JAN / 6</div>
                    </div>
                    <button className="cal-add-button14"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button14"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box14">
                  <div className="control-container14">
                    <div className="day-num-box14">
                      <div className="day-num104">JAN / 7</div>
                    </div>
                    <button className="cal-add-button14"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button14"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
              </div>
              <div className="date-row24">
                <div className="date-box024">
                  <div className="control-container024">
                    <div className="day-num-box024">
                      <div className="day-num024">JAN / 8</div>
                    </div>
                  <button className="cal-add-button024"><Link to="/addcalendar">+</Link></button>
                  <button className="cal-sub-button024"><Link to="/calendar">-</Link></button>
              </div>
                </div>
                  <div className="date-box24">
                    <div className="control-container24">
                      <div className="day-num-box24">
                        <div className="day-num24">JAN / 9</div>
                    </div>
                    <button className="cal-add-button24"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button24"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box24">
                  <div className="control-container24">
                    <div className="day-num-box24">
                      <div className="day-num24">JAN / 10</div>
                    </div>
                    <button className="cal-add-button24"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button24"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box24">
                  <div className="control-container24">
                    <div className="day-num-box24">
                      <div className="day-num24">JAN / 11</div>
                    </div>
                    <button className="cal-add-button24"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button24"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box24">
                  <div className="control-container24">
                    <div className="day-num-box24">
                      <div className="day-num24">JAN / 12</div>
                    </div>
                    <button className="cal-add-button24"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button24"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box24">
                  <div className="control-container24">
                    <div className="day-num-box24">
                      <div className="day-num24">JAN / 13</div>
                    </div>
                    <button className="cal-add-button24"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button24"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box24">
                  <div className="control-container24">
                    <div className="day-num-box24">
                      <div className="day-num24">JAN / 14</div>
                    </div>
                    <button className="cal-add-button24"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button24"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
              </div>
              <div className="date-row34">
                <div className="date-box034">
                  <div className="control-container034">
                    <div className="day-num-box034">
                      <div className="day-num034">JAN / 15</div>
                    </div>
                  <button className="cal-add-button034"><Link to="/addcalendar">+</Link></button>
                  <button className="cal-sub-button034"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box34">
                  <div className="control-container24">
                    <div className="day-num-box24">
                      <div className="day-num24">JAN / 16</div>
                    </div>
                    <button className="cal-add-button24"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button24"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box34">
                  <div className="control-container24">
                    <div className="day-num-box24">
                      <div className="day-num24">JAN / 17</div>
                    </div>
                    <button className="cal-add-button24"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button24"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box34">
                  <div className="control-container24">
                    <div className="day-num-box24">
                      <div className="day-num24">JAN / 18</div>
                    </div>
                    <button className="cal-add-button24"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button24"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box34">
                  <div className="control-container24">
                    <div className="day-num-box24">
                      <div className="day-num24">JAN / 19</div>
                    </div>
                    <button className="cal-add-button24"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button24"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box34">
                  <div className="control-container24">
                    <div className="day-num-box24">
                      <div className="day-num24">JAN / 20</div>
                    </div>
                    <button className="cal-add-button24"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button24"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box34">
                  <div className="control-container24">
                    <div className="day-num-box24">
                      <div className="day-num24">JAN / 21</div>
                    </div>
                    <button className="cal-add-button24"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button24"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
              </div>
              <div className="date-row44">
                <div className="date-box044">
                  <div className="control-container044">
                    <div className="day-num-box044">
                      <div className="day-num044">JAN / 22</div>
                    </div>
                    <button className="cal-add-button044"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button044"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box44">
                  <div className="control-container44">
                    <div className="day-num-box44">
                      <div className="day-num44">JAN / 23</div>
                    </div>
                    <button className="cal-add-button44"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button44"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box44">
                  <div className="control-container44">
                    <div className="day-num-box44">
                      <div className="day-num44">JAN / 24</div>
                    </div>
                    <button className="cal-add-button44"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button44"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box44">
                  <div className="control-container44">
                    <div className="day-num-box44">
                      <div className="day-num44">JAN / 25</div>
                    </div>
                    <button className="cal-add-button44"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button44"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box44">
                  <div className="control-container44">
                    <div className="day-num-box44">
                      <div className="day-num44">JAN / 26</div>
                    </div>
                    <button className="cal-add-button44"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button44"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box44">
                  <div className="control-container44">
                    <div className="day-num-box44">
                      <div className="day-num44">JAN / 27</div>
                    </div>
                    <button className="cal-add-button44"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button44"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box44">
                  <div className="control-container44">
                    <div className="day-num-box44">
                      <div className="day-num44">JAN / 28</div>
                    </div>
                    <button className="cal-add-button44"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button44"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
              </div>
              <div className="date-row54">
              <div className="date-box054">
                  <div className="control-container054">
                    <div className="day-num-box054">
                      <div className="day-num054">JAN / 29</div>
                    </div>
                    <button className="cal-add-button054"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button054"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box54">
                <div className="control-container54">
                    <div className="day-num-box54">
                      <div className="day-num54">JAN / 30</div>
                    </div>
                    <button className="cal-add-button54"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button54"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box54">
                <div className="control-container54">
                    <div className="day-num-box54">
                      <div className="day-num54">JAN / 31</div>
                    </div>
                    <button className="cal-add-button54"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button54"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-container4">
        <div className="retailor-container4">
          <a href="https://stockx.com" target="_blank" rel="noopener noreferrer">
            <img className="stockx4" src={logo15} alt="StockX" />
          </a>
          <a href="https://adidas.com" target="_blank" rel="noopener noreferrer">
            <img className="adidas4" src={logo11} alt="Adidas" />
          </a>
          <a href="https://nike.com" target="_blank" rel="noopener noreferrer">
            <img className="nike4" src={logo10} alt="Nike" />
          </a>
          <a href="https://www.adidas.co.uk/yeezy" target="_blank" rel="noopener noreferrer">
            <img className="yeezy4" src={logo12} alt="Yeezy" />
          </a>
          <a href="https://www.nike.com/jordan" target="_blank" rel="noopener noreferrer">
            <img className="jordan4" src={logo13} alt="Jordan" />
          </a>
          <a href="https://www.newbalance.com" target="_blank" rel="noopener noreferrer">
            <img className="new-balance4" src={logo14} alt="New Balance" />
          </a>
        </div>
    </div>
  </div>
);

export default Calendar;