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
            <label for="">
              Login
              <br />
              <input />
            </label>
            <br />
            <label for="">
              Password
              <br />
              <input />
            </label>
            <br />
            <div>
              <Link to="/adminpanel1">
                <button>Sign in</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Adminpanellogin;
