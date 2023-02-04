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
        .then((data) => setCoin(data))
        .catch((error) => console.error(error));
    }
  }, [coin]);
  return (
    <main className="coin_description_main">
      {
        <div className="coin_description_content">
          <div className="coins">
            <img src="asd" alt="coin_observe" />
            <img src="awdwa" alt="coin_reverse" />
          </div>
          <div className="description">
            <div className="up">
              <h1>{coin[0].coinname}</h1>
              <div className="allps">
                <p>
                  "Canadian beaver". Unique coin with the image of a beaver.
                  Face value - 5 cents. Created under Elizabeth II.
                </p>
                <br />
                <p>
                  In the center of the obverse is a portrait of Queen Elizabeth
                  II, the profile is directed to the right. The inscription on
                  the left semicircle (English) ELIZABETH II, on the right
                  semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of
                  GOD) with dots. Below is a mint mark.
                </p>
                <br />
                <p>
                  In the center of the coin reverse is a Canadian beaver on a
                  rock sticking out of the water. At the top is a semicircle
                  with the inscription "5 cents" between two maple leaves. At
                  the bottom in two lines is the inscription CANADA (CANADA) and
                  the year of minting.
                </p>
              </div>

              <table>
                <tr>
                  <td>Issuing Country</td>
                  <td>CANADA</td>
                </tr>
                <tr>
                  <td>Composition</td>
                  <td>CANADA</td>
                </tr>
                <tr>
                  <td>Quality</td>
                  <td>CANADA</td>
                </tr>
                <tr>
                  <td>Denomination</td>
                  <td>CANADA</td>
                </tr>
                <tr>
                  <td>Year</td>
                  <td>CANADA</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>CANADA</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>CANADA</td>
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
