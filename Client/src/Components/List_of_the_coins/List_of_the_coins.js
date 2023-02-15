import React, { useEffect } from "react";
import "../List_of_the_coins/List_of_the_coins.css";
import { Link } from "react-router-dom";
import arrow_down from "../../icons/arrow_down.svg";
import arrow_up from "../../icons/arrow_up.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Listofthecoins() {
  //#region bütün state-lər
  const [info, setInfo] = useState([]);
  const [isToggle, setIsToggle] = useState(false); // Advanced filter üçün display none display block
  const [inputvalue, setInputvalue] = useState(""); // q = ? seach üçün inputun valuesi bura atılır
  const [country, setCountry] = useState("");
  const [metal, setMetal] = useState("");
  const [quality, setQuality] = useState("");
  const [priceto, setPriceto] = useState("");
  const [pricefrom, setPricefrom] = useState("");
  const [yearto, setYearto] = useState("");
  const [yearfrom, setYearfrom] = useState("");
  //#endregion
  //#region bu hissədə 3 catgory dən hansı seçilirsə ona uyğun fetch atılır və bu category ə uyğun bütün coinlər əldə edilir.
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const pathname = url.pathname;
  const navigate = useNavigate(); // səhifəni geriyə atmaq üçün
  useEffect(() => {
    //bu hissədə category üçün fetch atılır
    fetch(`http://localhost:3000${pathname}`)
      .then((response) => response.json())
      .then((data) => setInfo(data))
      .catch((error) => console.error(error));
  }, [pathname]);
  //#endregion
  const fetchforSeach = (event) => {
    //fetch atılır seachdə yazılan sözlərə görə
    fetch(
      `http://localhost:3000/seach${pathname}/?q=${inputvalue}&country=${country}&metal=${metal}&quality=${quality}&pricefrom=${pricefrom}&priceto=${priceto}&yearfrom=${yearfrom}&yearto=${yearto}`
    )
      .then((response) => response.json())
      .then((data) => setInfo(data))
      .catch((error) => console.error(error));
    setIsToggle(false);
  };
  const changedisplay = () => {
    //bu hissədə advanced üstünə basanda block display və arraw down up üçün true false edir
    setIsToggle(!isToggle);
  };
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
          <input
            value={inputvalue}
            onChange={(e) => setInputvalue(e.target.value)}
            className="listofthecoins_seach_input"
          />
          <button onClick={fetchforSeach} className="seach_button">
            Seach
          </button>
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
              <label htmlFor="country">
                <br />
                Issuing country
                <br />
                <input
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  id="country"
                />
              </label>
              <label htmlFor="metal">
                <br />
                Metal
                <br />
                <input
                  value={metal}
                  id="metal"
                  onChange={(e) => setMetal(e.target.value)}
                />
              </label>
              <label htmlFor="quality">
                <br />
                Quality of the coin
                <br />
                <input
                  id="quality"
                  value={quality}
                  onChange={(e) => setQuality(e.target.value)}
                />
              </label>
            </div>
            <div className="main_inputs_right">
              <div className="up">
                <label htmlFor="">
                  Price
                  <br />
                  <label htmlFor="pricefrom" className="up_label">
                    from
                    <input
                      required
                      type="number"
                      id="pricefrom"
                      value={pricefrom}
                      onChange={(e) => setPricefrom(e.target.value)}
                    />
                    to
                    <input
                      required
                      type="number"
                      value={priceto}
                      onChange={(e) => setPriceto(e.target.value)}
                    />
                  </label>
                </label>
              </div>
              <div className="down">
                <label htmlFor="">
                  Year of issue <br />
                  <label htmlFor="yearfrom" className="down_label">
                    from
                    <input
                      required
                      type="number"
                      id="yearfrom"
                      value={yearfrom}
                      onChange={(e) => setYearfrom(e.target.value)}
                    />
                    to
                    <input
                      required
                      type="number"
                      value={yearto}
                      onChange={(e) => setYearto(e.target.value)}
                    />
                  </label>
                </label>
              </div>
            </div>
          </div>
        ) : (
          <div className="listofthecoins_coins">
            {info.length === 0 ? (
              <div id="listofthecoin_empty_coin">
                <h1>There is no coin</h1>
              </div>
            ) : (
              <>
                {info.map((coin) => (
                  <Link
                    key={coin.id}
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
              </>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
export default Listofthecoins;
