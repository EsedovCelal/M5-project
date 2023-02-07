import React, { useEffect } from "react";
import "../List_of_the_coins/List_of_the_coins.css";
import { Link } from "react-router-dom";
import arrow_down from "../../icons/arrow_down.svg";
import arrow_up from "../../icons/arrow_up.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Listofthecoins() {
  const [info, setInfo] = useState([]);
  const [isToggle, setIsToggle] = useState(false); // Advanced filter üçün display none display block
  const navigate = useNavigate(); // səhifəni geriyə atmaq üçün
  //#region bu hissədə 3 catgory dən hansı seçilirsə ona uyğun fetch atılır
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const pathname = url.pathname;
  const changedisplay = () => {
    //bu hissədə advanced üstünə basanda block display və arraw down up üçün true false edir
    setIsToggle(!isToggle);
  };
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
          <div className="listofthecoins_adv_img">
            <h5 onClick={changedisplay}>Advanced filter</h5>
            <img
              src={!isToggle ? arrow_down : arrow_up}
              alt="arrow_down_and_up"
            />
          </div>
        </div>
        {isToggle ? (
          <div className="listofthecoins_main_inputs">
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
        ) : (
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
        )}
      </div>
    </main>
  );
}
export default Listofthecoins;
