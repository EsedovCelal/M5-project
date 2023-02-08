import React from "react";
import { Link } from "react-router-dom";
import "../Admin_panel_login/Admin_panel_login.css";
function Adminpanellogin() {
  return (
    <main className="admin_panel_login_main">
      <div className="admin_panel_login_content">
        <header className="admin_panel_login_header">
          <h1>Admin panel</h1>
        </header>
        <div className="login">
          <div className="login_into">
            <label htmlFor="">
              Login
              <br />
              <input />
            </label>
            <br />
            <label htmlFor="">
              Password
              <br />
              <input />
            </label>
            <br />
            <div className="admin_panel_login_back_sign_in">
              <div className="admin_panel_login_back_sign_in_into">
                <Link to="/">
                  <button>Back</button>
                </Link>
                <Link to="/adminpanel1/allcoins">
                  <button>Sign in</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Adminpanellogin;
