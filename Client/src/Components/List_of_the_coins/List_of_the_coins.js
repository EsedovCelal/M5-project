// import React, { useEffect } from "react";
import "../List_of_the_coins/List_of_the_coins.css";
import { Link } from "react-router-dom";
import arrow_down from "../../icons/arrow_down.svg";
import coin from "../../icons/coin.png";
function Listofthecoins() {
  // useEffect(() => {
  //   fetch("http://localhost:3000/get", { mode: "no-cors" })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // });
  return (
    <main className="Listofthecoins_main">
      <div className="content">
        <header>
          <h1>List of the coins</h1>
          <h6>
            <span>Homepage</span> — List of the coins
          </h6>
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
        <div className="coins">
          <div className="left">
            <div className="coin">
              <img src={coin} alt="coin" />
              <div className="text">
                <h3>Canadian Beaver</h3>
                <br />
                <h6>
                  "Canadian beaver". Unique coin with the image of a beaver.
                  Face value - 5 cents. Created under Elizabeth II.
                </h6>
              </div>
            </div>
            <div className="coin">
              <img src={coin} alt="coin" />
              <div className="text">
                <h3>Canadian Beaver</h3>
                <br />
                <h6>
                  "Canadian beaver". Unique coin with the image of a beaver.
                  Face value - 5 cents. Created under Elizabeth II.
                </h6>
              </div>
            </div>
            <div className="coin">
              <img src={coin} alt="coin" />
              <div className="text">
                <h3>Canadian Beaver</h3>
                <br />
                <h6>
                  "Canadian beaver". Unique coin with the image of a beaver.
                  Face value - 5 cents. Created under Elizabeth II.
                </h6>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="coin">
              <img src={coin} alt="coin" />
              <div className="text">
                <h3>Canadian Beaver</h3>
                <br />
                <h6>
                  "Canadian beaver". Unique coin with the image of a beaver.
                  Face value - 5 cents. Created under Elizabeth II.
                </h6>
              </div>
            </div>
            <div className="coin">
              <img src={coin} alt="coin" />
              <div className="text">
                <h3>Canadian Beaver</h3>
                <br />
                <h6>
                  "Canadian beaver". Unique coin with the image of a beaver.
                  Face value - 5 cents. Created under Elizabeth II.
                </h6>
              </div>
            </div>
            <div className="coin">
              <img src={coin} alt="coin" />
              <div className="text">
                <h3>Canadian Beaver</h3>
                <br />
                <h6>
                  "Canadian beaver". Unique coin with the image of a beaver.
                  Face value - 5 cents. Created under Elizabeth II.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Listofthecoins;
