import React from "react";
import "../Homepage1/Homepage1.css";
import arrow_down from "../../icons/arrow_down.svg";
import arrow_right from "../../icons/arrow_right.svg";
import coin from "../../icons/coin.png";
import { Link } from "react-router-dom";
function Homepage1() {
  return (
    <div>
      <main class="homepage1_main">
        <div class="homepage1_content">
          <header className="homepage1_header">
            <Link style={{ textDecoration: "none" }} to="/">
              Homepage
            </Link>
            <Link to="/login">Sign in</Link>
          </header>
          <div class="seach_place">
            <label>Input field</label>
            <br />
            <input />
            <button class="seach_button">Seach</button>
            <br />
            <Link to="/advancedfilter">Advanced filter</Link>
            <img src={arrow_down} alt="arrow_down" />
          </div>
          <div class="coins">
            <div class="coin">
              <div class="texts">
                <h3>Bullion coins</h3>
                <Link to="/">Show all</Link>
                <img src={arrow_right} alt="arrow_right" />
              </div>
              <img className="texts_coin" src={coin} alt="coin" />
            </div>
            <div class="coin">
              <div class="texts">
                <h3>Exclusive coins</h3>
                <Link to="/">Show all</Link>
                <img src={arrow_right} alt="arrow_right" />
              </div>
              <img src={coin} alt="coin" />
            </div>
            <div class="coin">
              <div class="texts">
                <h3>Commemorative coins</h3>
                <Link to="/listofthecoins">Show all</Link>
                <img src={arrow_right} alt="arrow_right" />
              </div>
              <img src={coin} alt="coin" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Homepage1;
