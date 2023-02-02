import React from "react";
import "../Homepage2/Homepage2.css";
import arrow_up from "../../icons/arrow_up.svg";
import { Link } from "react-router-dom";
function Homepage2() {
  return (
    <main class="homepage2_main">
      <div class="content">
        <header>
          <Link style={{ textDecoration: "none" }} to="/">
            Homepage
          </Link>
        </header>
        <div class="seach_place">
          <label for="">Input field</label>
          <br />
          <input class="seach_input" />
          <button class="seach_button">Seach</button>
          <br />
          <Link to="/">Advanced filter</Link>
          <img src={arrow_up} alt="arrow_up" />
        </div>
        <div class="main_inputs">
          <div class="main_inputs_left">
            <label for="">
              <br />
              Issuing country
              <br />
              <input />
            </label>
            <label for="">
              <br />
              Metal
              <br />
              <input />
            </label>
            <label for="">
              <br />
              Quality of the coin
              <br />
              <input />
            </label>
          </div>
          <div class="main_inputs_right">
            <div class="up">
              <label for="">
                Price
                <br />
                <label for="" class="up_label">
                  from
                  <input type="text" />
                  to
                  <input type="text" />
                </label>
              </label>
            </div>
            <div class="down">
              <label for="">
                Year of issue <br />
                <label for="" class="down_label">
                  from
                  <input type="text" />
                  to
                  <input type="text" />
                </label>
              </label>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Homepage2;
