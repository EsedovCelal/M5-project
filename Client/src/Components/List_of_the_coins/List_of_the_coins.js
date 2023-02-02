import React from "react";
import "../List_of_the_coins/List_of_the_coins.css";
import { Link } from "react-router-dom";
import arrow_down from "../../icons/arrow_down.svg";
import coin from "../../icons/coin.png";
function Listofthecoins() {
  return (
    <main class="Listofthecoins_main">
      <div class="content">
        <header>
          <h1>List of the coins</h1>
          <h6>
            <span>Homepage</span> — List of the coins
          </h6>
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
          <div class="left">
            <div class="coin">
              <img src={coin} alt="coin" />
              <div class="text">
                <h3>Canadian Beaver</h3>
                <br />
                <h6>
                  "Canadian beaver". Unique coin with the image of a beaver.
                  Face value - 5 cents. Created under Elizabeth II.
                </h6>
              </div>
            </div>
            <div class="coin">
              <img src={coin} alt="coin" />
              <div class="text">
                <h3>Canadian Beaver</h3>
                <br />
                <h6>
                  "Canadian beaver". Unique coin with the image of a beaver.
                  Face value - 5 cents. Created under Elizabeth II.
                </h6>
              </div>
            </div>
            <div class="coin">
              <img src={coin} alt="coin" />
              <div class="text">
                <h3>Canadian Beaver</h3>
                <br />
                <h6>
                  "Canadian beaver". Unique coin with the image of a beaver.
                  Face value - 5 cents. Created under Elizabeth II.
                </h6>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="coin">
              <img src={coin} alt="coin" />
              <div class="text">
                <h3>Canadian Beaver</h3>
                <br />
                <h6>
                  "Canadian beaver". Unique coin with the image of a beaver.
                  Face value - 5 cents. Created under Elizabeth II.
                </h6>
              </div>
            </div>
            <div class="coin">
              <img src={coin} alt="coin" />
              <div class="text">
                <h3>Canadian Beaver</h3>
                <br />
                <h6>
                  "Canadian beaver". Unique coin with the image of a beaver.
                  Face value - 5 cents. Created under Elizabeth II.
                </h6>
              </div>
            </div>
            <div class="coin">
              <img src={coin} alt="coin" />
              <div class="text">
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
