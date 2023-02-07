import React from "react";
import "../Homepage2/Homepage2.css";
import arrow_up from "../../icons/arrow_up.svg";
import { Link, useNavigate } from "react-router-dom";
function Homepage2() {
  const navigate = useNavigate();
  return (
    <main className="homepage2_main">
      <div className="homepage2_content">
        <header>
          <Link style={{ textDecoration: "none" }} to="/">
            Homepage
          </Link>
        </header>
        <div className="homepage2_seach_place">
          <label for="">Input field</label>
          <br />
          <input className="seach_input" />
          <button className="seach_button">Seach</button>
          <br />
          <h3 onClick={() => navigate(-1)}>Advanced filter</h3>
          <Link to="/">Advanced filter</Link>
          <img src={arrow_up} alt="arrow_up" />
        </div>
        <div className="main_inputs">
          <div className="main_inputs_left">
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
          <div className="main_inputs_right">
            <div className="up">
              <label for="">
                Price
                <br />
                <label for="" className="up_label">
                  from
                  <input type="text" />
                  to
                  <input type="text" />
                </label>
              </label>
            </div>
            <div className="down">
              <label for="">
                Year of issue <br />
                <label for="" className="down_label">
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
