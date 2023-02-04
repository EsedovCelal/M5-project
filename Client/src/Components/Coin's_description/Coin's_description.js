import React, { useEffect } from "react";
import "../Coin's_description/Coin's_description.css";
import { useState } from "react";
function Coin_description() {
  const [coin, setCoin] = useState([]);
  //bu hissədə linkdən id götürülüb fetchdə istifadə edilirş
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const pathname = url.pathname;
  useEffect(() => {
    if (coin.length === 0) {
      //burda pathname budur /description/:id
      fetch(`http://localhost:3000${pathname}`)
        .then((response) => response.json())
        .then((data) => setCoin(...data))
        .catch((error) => console.error(error));
    }
  }, [coin]);
  return (
    <main className="coin_description_main">
      {
        <div className="coin_description_content">
          <div className="coins">
            <img src={coin.linkObserve} alt="coin_observe" />
            <img src={coin.linkReverse} alt="coin_reverse" />
          </div>
          <div className="description">
            <div className="up">
              <h1>{coin.coinname}</h1>
              <div className="allps">
                <p>{coin.shortDesc}</p>
                <br />
                <p>{coin.longDesc}</p>
              </div>

              <table>
                <tr>
                  <td>Issuing Country</td>
                  <td>{coin.country}</td>
                </tr>
                <tr>
                  <td>Composition</td>
                  <td>{coin.metal}</td>
                </tr>
                <tr>
                  <td>Quality</td>
                  <td>{coin.quality}</td>
                </tr>
                <tr>
                  <td>Denomination</td>
                  <td>coin.denominations</td>
                </tr>
                <tr>
                  <td>Year</td>
                  <td>{coin.year}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>{coin.weight}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{coin.price}</td>
                </tr>
              </table>
            </div>
            <div className="down">
              <a href="">Back to the list</a>
            </div>
          </div>
        </div>
      }
    </main>
  );
}
export default Coin_description;
