import React, { useEffect, useState } from "react";
import "../Admin_panel1/Admin_panel1.css";
import circle from "../../icons/circle.svg";
import { Link } from "react-router-dom";
function Admin_panel1() {
  const [coin, setCoin] = useState([]);
  useEffect(() => {
    if (coin.length === 0) {
      //burda pathname budur /description/:id
      fetch(`http://localhost:3000/getlasttwocoins`)
        .then((response) => response.json())
        .then((data) => setCoin(data))
        .catch((error) => console.error(error));
    }
  }, [coin]);
  return (
    <main className="admin_panel1_main">
      <div className="content">
        <header>
          <h1>Admin panel</h1>
        </header>
        <div className="admin_panel1_seach_place">
          <label>Input field</label>
          <br />
          <input className="admin_panel1_seach_place_input" />
          <button className="seach_button">Seach</button>
          <br />
        </div>
      </div>
      <div className="commun_coin_info">
        {coin.map((coin) => (
          <div className="coin_info">
            <div>
              <img src={coin.linkObserve} alt="" />
            </div>
            <div className="text">
              <h1>{coin.coinname}</h1>
              <p>{coin.shortDesc}</p>
            </div>
            <div>
              <button>Edit</button>
            </div>
            <div>
              <button>Delete</button>
            </div>
          </div>
        ))}
        <div className="add_new_coin">
          <Link to="/adminpanel2">
            <img src={circle} alt="circle" />
          </Link>
          <Link to="/adminpanel2">
            <a href="">Add a new coin</a>
          </Link>
        </div>
      </div>
    </main>
  );
}
export default Admin_panel1;
