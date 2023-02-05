import React from "react";
import "../Admin_panel1/Admin_panel1.css";
import circle from "../../icons/circle.svg";
import { Link } from "react-router-dom";
function Admin_panel1() {
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
        <div className="coin_info">
          <div>
            <img src="./images/coin.svg" alt="" />
          </div>
          <div className="text">
            <h1>Canadian Beaver</h1>
            <p>
              "Canadian beaver". Unique coin with the image of a beaver. Face
              value - 5 cents. Created under Elizabeth II.
            </p>
          </div>
          <div>
            <button>Edit</button>
          </div>
          <div>
            <button>Delete</button>
          </div>
        </div>
        <div className="coin_info">
          <div>
            <img src="./images/coin.svg" alt="" />
          </div>
          <div className="text">
            <h1>Canadian Beaver</h1>
            <p>
              "Canadian beaver". Unique coin with the image of a beaver. Face
              value - 5 cents. Created under Elizabeth II.
            </p>
          </div>
          <div>
            <button>Edit</button>
          </div>
          <div>
            <button>Delete</button>
          </div>
        </div>
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
