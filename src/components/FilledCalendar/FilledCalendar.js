import React from "react";
import { Link } from "react-router-dom";
import logo9 from "./logo9.png";
import logo15 from "./Retailors/stockx.png";
import logo10 from "./Retailors/nike.png";
import logo11 from "./Retailors/adidas.png";
import logo12 from "./Retailors/yeezy.png";
import logo13 from "./Retailors/jordan.png";
import logo14 from "./Retailors/nb.png";
import './FilledCalendar.css';

const FilledCalendar = () => (
  <div className="main-container9">
    <div className="top-container9">
      <div className="user-container9">
        <div className="user-info-container9">
          <p className="user-login9">SIGNED IN - USER 0001</p>
          <div className="links-container9">
            <Link to="/update" className="update-link9">UPDATE</Link>
            <div className="separator9"></div>
            <Link to="/" className="signout-link9">SIGN OUT</Link>
          </div>
        </div>
      </div>
      <div className="content-container9">
        <div className="header-container9">
          <div className="controller-container9">  
            <img className="logo9" src={logo9} alt="Logo" />
            <div className="link-container9">
                <Link to="/main" className="link99">NEWS</Link>
              <Link to="/calendar" className="link9">CALENDAR</Link>
              <Link to="/yzyinventory" className="link99">INVENTORY</Link>
              <Link className="link99">SALES</Link>
              <Link className="link999">ANALYTICS</Link>
            </div>
          </div>
        </div>
        <div className="separator-line99"></div>
      </div>
      <div className="middle-container9">
        <div className="dashboard-container9">
        <div className="stats-container9">
          <div className="box4321">
            <div className="month-select-title9">SELECT MONTH</div>
          </div>
          <div className="box8765">
            <button className="month-button9">JAN</button>
            <button className="month-button9">FEB</button>
            <button className="month-button9">MAR</button>
            <button className="month-button9">APR</button>
            <button className="month-button9">MAY</button>
            <button className="month-button9">JUN</button>
            <button className="month-button9">JUL</button>
            <button className="month-button9">AUG</button>
            <button className="month-button9">SEP</button>
            <button className="month-button9">OCT</button>
            <button className="month-button9">NOV</button>
            <button className="month-button9736">DEC</button>
          </div>
          <div className="invent9">
              <div className="invent-title-box9">
                <div className="invent-title9">INVENTORY</div>
              </div>
              <div className="number01-box9">
                <div className="count014">0002</div>
              </div>
            </div>
          <div className="stats-separator019"></div>
            <div className="value9">
              <div className="value-title-box9">
                <div className="value-title9">VALUE</div>
              </div>
              <div className="number02-box9">
                <div className="count029">0350</div>
              </div>
            </div>
          <div className="stats-separator029"></div>
            <div className="resold9">
              <div className="resold-title-box9">
                <div className="resold-title9">RESOLD</div>
              </div>
              <div className="number03-box9">
                <div className="count039">0000</div>
              </div>
            </div>
          <div className="stats-separator039"></div>
            <div className="profit9">
              <div className="profit-title-box9">
                <div className="profit-title9">PROFIT</div>
              </div>
              <div className="number04-box9">
                <div className="count09">0000</div>
              </div>
            </div>
          </div>
          <div className="separator-line999"></div>
        </div>
        <div className="body-container9">
          <div className="date-rows-container9">
            <div className="date-row19">
              <div className="date-box109">
                <div className="control-container109">
                  <div className="day-num-box109">
                    <div className="day-num109">DEC / 1</div>
                  </div>
                  <button className="cal-add-button109"><Link to="/addcalendar">+</Link></button>
                  <button className="cal-sub-button109"><Link to="/deccalendar">-</Link></button>
                </div>
                <div className="box-1981">
                  <div className="box-1981-pic"></div>
                  <div className="box-1981-text">Air Jordan 3 White Cement Reimagined</div>
                </div>
              </div>
              <div className="date-box19">
                <div className="control-container19">
                  <div className="day-num-box19">
                    <div className="day-num109">DEC / 2</div>
                  </div>
                  <button className="cal-add-button19"><Link to="/addcalendar">+</Link></button>
                  <button className="cal-sub-button19"><Link to="/calendar">-</Link></button>
                </div>
              </div>
                <div className="date-box19">
                  <div className="control-container19">
                    <div className="day-num-box19">
                      <div className="day-num109">DEC / 3</div>
                    </div>
                    <button className="cal-add-button19"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button19"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box19">
                  <div className="control-container19">
                    <div className="day-num-box19">
                      <div className="day-num109">DEC / 4</div>
                    </div>
                    <button className="cal-add-button19"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button19"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box19">
                  <div className="control-container19">
                    <div className="day-num-box19">
                      <div className="day-num109">DEC / 5</div>
                    </div>
                    <button className="cal-add-button19"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button19"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box19">
                  <div className="control-container19">
                    <div className="day-num-box19">
                      <div className="day-num109">DEC / 6</div>
                    </div>
                    <button className="cal-add-button19"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button19"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box19">
                  <div className="control-container19">
                    <div className="day-num-box19">
                      <div className="day-num109">DEC / 7</div>
                    </div>
                    <button className="cal-add-button19"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button19"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
              </div>
              <div className="date-row29">
                <div className="date-box029">
                  <div className="control-container029">
                    <div className="day-num-box029">
                      <div className="day-num029">DEC / 8</div>
                    </div>
                  <button className="cal-add-button029"><Link to="/addcalendar">+</Link></button>
                  <button className="cal-sub-button029"><Link to="/calendar">-</Link></button>
              </div>
                </div>
                  <div className="date-box29">
                    <div className="control-container29">
                      <div className="day-num-box29">
                        <div className="day-num29">DEC / 9</div>
                    </div>
                    <button className="cal-add-button29"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button29"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box29">
                  <div className="control-container29">
                    <div className="day-num-box29">
                      <div className="day-num29">DEC / 10</div>
                    </div>
                    <button className="cal-add-button29"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button29"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box29">
                  <div className="control-container29">
                    <div className="day-num-box29">
                      <div className="day-num29">DEC / 11</div>
                    </div>
                    <button className="cal-add-button29"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button29"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box29">
                  <div className="control-container29">
                    <div className="day-num-box29">
                      <div className="day-num29">DEC / 12</div>
                    </div>
                    <button className="cal-add-button29"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button29"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box29">
                  <div className="control-container29">
                    <div className="day-num-box29">
                      <div className="day-num29">DEC / 13</div>
                    </div>
                    <button className="cal-add-button29"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button29"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box29">
                  <div className="control-container29">
                    <div className="day-num-box29">
                      <div className="day-num29">DEC / 14</div>
                    </div>
                    <button className="cal-add-button29"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button29"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
              </div>
              <div className="date-row39">
                <div className="date-box039">
                  <div className="control-container039">
                    <div className="day-num-box039">
                      <div className="day-num039">DEC / 15</div>
                    </div>
                  <button className="cal-add-button039"><Link to="/addcalendar">+</Link></button>
                  <button className="cal-sub-button039"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box39">
                  <div className="control-container29">
                    <div className="day-num-box29">
                      <div className="day-num29">DEC / 16</div>
                    </div>
                    <button className="cal-add-button29"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button29"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box39">
                  <div className="control-container29">
                    <div className="day-num-box29">
                      <div className="day-num29">DEC / 17</div>
                    </div>
                    <button className="cal-add-button29"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button29"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box39">
                  <div className="control-container29">
                    <div className="day-num-box29">
                      <div className="day-num29">DEC / 18</div>
                    </div>
                    <button className="cal-add-button29"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button29"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box39">
                  <div className="control-container29">
                    <div className="day-num-box29">
                      <div className="day-num29">DEC / 19</div>
                    </div>
                    <button className="cal-add-button29"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button29"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box39">
                  <div className="control-container29">
                    <div className="day-num-box29">
                      <div className="day-num29">DEC / 20</div>
                    </div>
                    <button className="cal-add-button29"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button29"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box39">
                  <div className="control-container29">
                    <div className="day-num-box29">
                      <div className="day-num29">DEC / 21</div>
                    </div>
                    <button className="cal-add-button29"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button29"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
              </div>
              <div className="date-row49">
                <div className="date-box049">
                  <div className="control-container049">
                    <div className="day-num-box049">
                      <div className="day-num049">DEC / 22</div>
                    </div>
                    <button className="cal-add-button049"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button049"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box49">
                  <div className="control-container49">
                    <div className="day-num-box49">
                      <div className="day-num49">DEC / 23</div>
                    </div>
                    <button className="cal-add-button49"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button49"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box49">
                  <div className="control-container49">
                    <div className="day-num-box49">
                      <div className="day-num49">DEC / 24</div>
                    </div>
                    <button className="cal-add-button49"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button49"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box49">
                  <div className="control-container49">
                    <div className="day-num-box49">
                      <div className="day-num49">DEC / 25</div>
                    </div>
                    <button className="cal-add-button49"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button49"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box49">
                  <div className="control-container49">
                    <div className="day-num-box49">
                      <div className="day-num49">DEC / 26</div>
                    </div>
                    <button className="cal-add-button49"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button49"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box49">
                  <div className="control-container49">
                    <div className="day-num-box49">
                      <div className="day-num49">DEC / 27</div>
                    </div>
                    <button className="cal-add-button49"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button49"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box49">
                  <div className="control-container49">
                    <div className="day-num-box49">
                      <div className="day-num49">DEC / 28</div>
                    </div>
                    <button className="cal-add-button49"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button49"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
              </div>
              <div className="date-row59">
              <div className="date-box059">
                  <div className="control-container059">
                    <div className="day-num-box059">
                      <div className="day-num059">DEC / 29</div>
                    </div>
                    <button className="cal-add-button059"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button059"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box59">
                <div className="control-container59">
                    <div className="day-num-box59">
                      <div className="day-num59">DEC / 30</div>
                    </div>
                    <button className="cal-add-button59"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button59"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
                <div className="date-box59">
                <div className="control-container59">
                    <div className="day-num-box59">
                      <div className="day-num59">DEC / 31</div>
                    </div>
                    <button className="cal-add-button59"><Link to="/addcalendar">+</Link></button>
                    <button className="cal-sub-button59"><Link to="/calendar">-</Link></button>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-container9">
        <div className="retailor-container9">
          <a href="https://stockx.com" target="_blank" rel="noopener noreferrer">
            <img className="stockx9" src={logo15} alt="StockX" />
          </a>
          <a href="https://adidas.com" target="_blank" rel="noopener noreferrer">
            <img className="adidas9" src={logo11} alt="Adidas" />
          </a>
          <a href="https://nike.com" target="_blank" rel="noopener noreferrer">
            <img className="nike9" src={logo10} alt="Nike" />
          </a>
          <a href="https://www.adidas.co.uk/yeezy" target="_blank" rel="noopener noreferrer">
            <img className="yeezy9" src={logo12} alt="Yeezy" />
          </a>
          <a href="https://www.nike.com/jordan" target="_blank" rel="noopener noreferrer">
            <img className="jordan9" src={logo13} alt="Jordan" />
          </a>
          <a href="https://www.newbalance.com" target="_blank" rel="noopener noreferrer">
            <img className="new-balance9" src={logo14} alt="New Balance" />
          </a>
        </div>
    </div>
  </div>
);

export default FilledCalendar;