import React from "react";
import "../Admin_panel1/Admin_panel1.css";
function Admin_panel1() {
  return (
    <main className="admin_panel1_main">
      <div class="content">
        <header>
          <h1>Admin panel</h1>
        </header>
        <div class="seach_place">
          <label>Input field</label>
          <br />
          <input />
          <button class="seach_button">Seach</button>
          <br />
        </div>
      </div>
      <div class="commun_coin_info">
        <div class="coin_info">
          <div>
            <img src="./images/coin.svg" alt="" />
          </div>
          <div class="text">
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
        <div class="coin_info">
          <div>
            <img src="./images/coin.svg" alt="" />
          </div>
          <div class="text">
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
        <div class="add_new_coin">
          <img src="./images/circle.svg" alt="circle" />
          <a href="">Add a new coin</a>
        </div>
      </div>
    </main>
  );
}
export default Admin_panel1;
