import React from "react";
import "../Admin_panel2/Admin_panel2.css";
function Admin_panel2() {
  return (
    <div>
      <main class="admin_panel2_main">
        <div id="admin_panel2_header">
          <h1>Admin panel</h1>
        </div>
        <div class="admin_panel2_inputs">
          <div class="left">
            <label for="">
              <br />
              Coin name
              <br />
              <input type="text" />
            </label>
            <label for="">
              <br />
              Face value
              <br />
              <input type="text" />{" "}
            </label>
            <label for="">
              <br />
              Year of issue
              <br />
              <input type="text" />{" "}
            </label>
            <label for="">
              <br />
              Price
              <br />
              <input type="text" />{" "}
            </label>
            <label for="">
              <br />
              Country
              <br />
              <input type="text" />{" "}
            </label>
            <label for="">
              <br />
              Metal
              <br />
              <input type="text" />{" "}
            </label>
          </div>
          <div class="middle">
            <label for="">
              <br />
              Short description
              <br />
              <input class="descriptions" type="text" />
            </label>
            <label for="">
              <br />
              Long description
              <br />
              <input class="descriptions" type="text" />
            </label>
            <label for="">
              <br />
              Quality of the coin
              <br />
              <input type="text" />
            </label>
            <label for="">
              <br />
              Weight
              <br />
              <input type="text" />{" "}
            </label>
          </div>
          <div class="right">
            <div>
              <label for="">
                <br />
                Link to obverse image
                <br />
                <input type="text" />
              </label>
              <label for="">
                <br />
                Link to reverse image
                <br />
                <input type="text" />
              </label>
            </div>
            <div class="buttons">
              <button>Save</button>
              <button>Cancel</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Admin_panel2;
