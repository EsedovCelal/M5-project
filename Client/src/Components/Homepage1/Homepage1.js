import React, { useEffect } from "react";
import "../Homepage1/Homepage1.css";
import arrow_down from "../../icons/arrow_down.svg";
import arrow_right from "../../icons/arrow_right.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
function Homepage1() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    if (info.length === 0) {
      fetch("http://localhost:3000/")
        .then((response) => response.json())
        .then((data) => setInfo(data))
        .catch((error) => console.error(error));
    }
  });
  return (
    <div>
      <main className="homepage1_main">
        <div className="homepage1_content">
          <header className="homepage1_header">
            <Link style={{ textDecoration: "none" }} to="/">
              Homepage
            </Link>
            <Link to="/login">Sign in</Link>
          </header>
          <div className="seach_place">
            <label>Input field</label>
            <br />
            <input />
            <button className="seach_button">Seach</button>
            <br />
            <Link to="/advancedfilter">Advanced filter</Link>
            <img src={arrow_down} alt="arrow_down" />
          </div>
          <div className="homepage1_coins">
            {info.map((coin) => (
              <div className="homepage1_coin">
                <div className="texts">
                  <h3>{coin.category_name} coins</h3>
                  <Link to={`/${coin.category_name}`}>Show all</Link>
                  <img src={arrow_right} alt="arrow_right" />
                </div>
                <img className="texts_coin" src={coin.linkObserve} alt="coin" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
export default Homepage1;
