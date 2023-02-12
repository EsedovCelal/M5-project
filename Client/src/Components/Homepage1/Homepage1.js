import React, { useEffect, useState } from "react";
import "../Homepage1/Homepage1.css";
import arrow_down from "../../icons/arrow_down.svg";
import arrow_up from "../../icons/arrow_up.svg";
import arrow_right from "../../icons/arrow_right.svg";
import { Link } from "react-router-dom";
function Homepage1() {
  const [info, setInfo] = useState([]);
  const [isToggle, setIsToggle] = useState(false); // Advanced filter üçün display none display block
  const changedisplay = () => {
    //bu hissədə advanced üstünə basanda block display və arraw down up üçün true false edir
    setIsToggle(!isToggle);
  };
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
            <Link style={{ textDecoration: "none" }} to="/login">
              Sign in
            </Link>
          </header>
          <div className="homepage1_seach_place">
            <label>Input field</label>
            <br />
            <input />
            <button className="seach_button">Seach</button>
            <br />
            <div className="hamepage1_adv_img" onClick={changedisplay}>
              <h5>Advanced filter</h5>
              <img
                src={!isToggle ? arrow_down : arrow_up}
                alt="arrow_down_and_up"
              />
            </div>
          </div>
          {isToggle ? (
            <div className="main_inputs">
              <div className="main_inputs_left">
                <label htmlFor="">
                  <br />
                  Issuing country
                  <br />
                  <input />
                </label>
                <label htmlFor="">
                  <br />
                  Metal
                  <br />
                  <input />
                </label>
                <label htmlFor="">
                  <br />
                  Quality of the coin
                  <br />
                  <input />
                </label>
              </div>
              <div className="main_inputs_right">
                <div className="up">
                  <label htmlFor="">
                    Price
                    <br />
                    <label htmlFor="" className="up_label">
                      from
                      <input type="text" />
                      to
                      <input type="text" />
                    </label>
                  </label>
                </div>
                <div className="down">
                  <label htmlFor="">
                    Year of issue <br />
                    <label htmlFor="" className="down_label">
                      from
                      <input type="text" />
                      to
                      <input type="text" />
                    </label>
                  </label>
                </div>
              </div>
            </div>
          ) : (
            <div className="homepage1_coins">
              {info.map((coin) => (
                <div key={coin.id} className="homepage1_coin">
                  <div className="texts">
                    <h3>{coin.category_name} coins</h3>
                    <Link to={`/${coin.category_name}`}>Show all</Link>
                    <img src={arrow_right} alt="arrow_right" />
                  </div>
                  <img
                    className="texts_coin"
                    src={coin.linkObserve}
                    alt="coin"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
export default Homepage1;
