import React, { useEffect } from "react";
import "../List_of_the_coins/List_of_the_coins.css";
import { Link } from "react-router-dom";
import arrow_down from "../../icons/arrow_down.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Listofthecoins() {
  const [info, setInfo] = useState([]);
  const navigate = useNavigate(); // səhifəni geriyə atmaq üçün
  //#region bu hissədə 3 catgory dən hansı seçilirsə ona uyğun fetch atılır
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const pathname = url.pathname;
  useEffect(() => {
    if (info.length === 0) {
      fetch(`http://localhost:3000${pathname}`)
        .then((response) => response.json())
        .then((data) => setInfo(data))
        .catch((error) => console.error(error));
    }
  }, [info, pathname]);
  //#endregion
  return (
    <main className="listofthecoins_main">
      <div className="listofthecoins_content">
        <header className="listofthecoins_header">
          <h1>List of the coins</h1>
          <h6>
            <span onClick={() => navigate(-1)}>Homepage</span> — List of the
            coins
          </h6>
        </header>
        <div className="listofthecoins_seach_place">
          <label>Input field</label>
          <br />
          <input className="listofthecoins_seach_input" />
          <button className="seach_button">Seach</button>
          <br />
          <Link to="/advancedfilter">Advanced filter</Link>
          <img src={arrow_down} alt="arrow_down" />
        </div>
        <div className="listofthecoins_coins">
          {info.map((coin) => (
            <Link
              style={{ textDecoration: "none" }}
              to={`/description/${coin.id}`}
            >
              <div className="coin">
                <img src={coin.linkObserve} alt="coin" />
                <div className="text">
                  <h3>{coin.coinname}</h3>
                  <br />
                  <h6>{coin.shortDesc}</h6>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
export default Listofthecoins;
