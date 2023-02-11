import React, { useState } from "react";
import "../Admin_panel_login/Admin_panel_login.css";
import { useNavigate } from "react-router-dom";
function Adminpanelloginregister() {
  const navigate = useNavigate(); // səhifəni geriyə atmaq üçün
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const sendRegisterinfo = () => {
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => alert(data))
      .catch((error) => console.error(error));
    resetValues();
  };
  const resetValues = () => {
    setUsername("");
    setPassword("");
  };
  return (
    <main className="admin_panel_login_main">
      <div className="admin_panel_login_content">
        <header className="admin_panel_login_header">
          <h1>Admin panel</h1>
        </header>
        <div className="login">
          <div className="login_into">
            <label htmlFor="">
              Enter new Login
              <br />
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </label>
            <br />
            <label htmlFor="">
              Enter new Password
              <br />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </label>
            <br />
            <div className="admin_panel_login_back_sign_in">
              <div className="admin_panel_login_back_sign_in_into">
                <button onClick={() => navigate(-1)}>Back</button>
                <button onClick={sendRegisterinfo}>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Adminpanelloginregister;
