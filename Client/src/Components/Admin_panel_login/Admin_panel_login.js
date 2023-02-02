import React from "react";
import "../Admin_panel_login/Admin_panel_login.css";
function Adminpanellogin() {
  return (
    <main class="admin_panel_login_main">
      <div class="admin_panel_login_content">
        <header class="admin_panel_login_header">
          <h1>Admin panel</h1>
        </header>
        <div class="login">
          <div class="login_into">
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
              <button>Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Adminpanellogin;
