import React from "react";
import "../Homepage1/Homepage1.css";
function Homepage1() {
  return (
    <main class="main">
      <div class="content">
        <header>
          <h1>Homepage</h1>
        </header>
        <div class="seach_place">
          <label>Input field</label>
          <br />
          <input />
          <button class="seach_button">Seach</button>
          <br />
          <a href="">Advanced filter</a>
          <img src="./icons/arrow_down.svg" alt="coin" />
        </div>
        <div class="coins">
          <div class="coin">
            <div class="texts">
              <h3>Bullion coins</h3>
              <span>Show all</span>
              <img src="./images/arrow_right.svg" alt="arrow_right" />
            </div>
            <img src="./images/coin.svg" alt="coin" />
          </div>
          <div class="coin">
            <div class="texts">
              <h3>Exclusive coins</h3>
              <span>Show all</span>
              <img src="./images/arrow_right.svg" alt="arrow_right" />
            </div>
            <img src="./images/coin.svg" alt="coin" />
          </div>
          <div class="coin">
            <div class="texts">
              <h3>Commemorative coins</h3>
              <span>Show all</span>
              <img src="./images/arrow_right.svg" alt="arrow_right" />
            </div>
            <img src="./images/coin.svg" alt="coin" />
          </div>
        </div>
      </div>
    </main>
  );
}
export default Homepage1;
