import React, { useEffect, useState } from "react";
import "../Homepage1/Homepage1.css";
import arrow_right from "../../icons/arrow_right.svg";
import { Link } from "react-router-dom";
function Homepage1() {
  const [info, setInfo] = useState([]);
  const [input, setInputvalue] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => setInfo(data))
      .catch((error) => console.error(error));
  }, []);
  const fetachforseach = () => {
    // for seach
    fetch(`http://localhost:3000/home/seach/?q=${input}`)
      .then((response) => response.json())
      .then((data) => setInfo(data))
      .catch((error) => console.error(error));
    console.log(input);
  };
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
            <label htmlFor="inputvalueforseach">Input field</label>
            <br />
            <input
              onChange={(e) => setInputvalue(e.target.value)}
              id="inputvalueforseach"
            />
            <button onClick={fetachforseach} className="seach_button">
              Seach
            </button>
            <br />
          </div>
          <div className="homepage1_coins">
            {info.map((coin) => (
              <div key={coin.id} className="homepage1_coin">
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
