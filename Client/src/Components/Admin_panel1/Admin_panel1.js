import React, { useEffect, useState } from "react";
import "../Admin_panel1/Admin_panel1.css";
import circle from "../../icons/circle.svg";
import { Link } from "react-router-dom";
function Admin_panel1() {
  const [coin, setCoin] = useState([]);
  useEffect(() => {
    if (coin.length === 0) {
      fetch(`http://localhost:3000/adminpanel1/allcoins`)
        .then((response) => response.json())
        .then((data) => setCoin(data))
        .catch((error) => console.error(error));
    }
  }, [coin]);
  const deleteitem = (event) => {
    const answer = window.confirm("Are you sure delete this coin ");
    if (answer) {
      fetch(`http://localhost:3000/adminpanel1/delete/${event.target.id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => alert(data))
        .catch((error) => console.error(error));
      let filtered = coin.filter(
        (coin_one) => parseInt(coin_one.id) !== parseInt(event.target.id)
      );
      setCoin(filtered);
    }
  };
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
          <div key={coin.id} className="coin_info">
            <div>
              <img src={coin.linkObserve} alt="" />
            </div>
            <div className="text">
              <h1>{coin.coinname}</h1>
              <p>{coin.shortDesc}</p>
            </div>
            <div>
              <Link to={`/adminpanel2/editcoin/${coin.id}`}>
                <button>Edit</button>
              </Link>
              {/* editə basib coini edit etmək üçün adminpanel2 bölməsinə yəni add coin componentinə keçid edir*/}
            </div>
            <div>
              <button id={coin.id} onClick={deleteitem}>
                Delete
              </button>
            </div>
          </div>
        ))}
        <div className="add_new_coin">
          <Link to="/adminpanel2">
            <img src={circle} alt="circle" />
          </Link>
          <Link to="/adminpanel2">Add a new coin</Link>
        </div>
      </div>
    </main>
  );
}
export default Admin_panel1;
