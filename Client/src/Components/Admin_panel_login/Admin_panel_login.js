import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Admin_panel_login/Admin_panel_login.css";
function Adminpanellogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // səhifəni geriyə atmaq üçün
  const Chechuserandpassword = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success === "correct password") {
          navigate("/adminpanel1/allcoins");
          localStorage.setItem("access_token", data.token);
        } else {
          alert(data.error);
        }
      });
  };
  return (
    <main className="admin_panel_login_main">
      <form
        onSubmit={Chechuserandpassword}
        method="POST"
        action=""
        className="admin_panel_login_content"
      >
        <header className="admin_panel_login_header">
          <h1>Admin panel</h1>
        </header>
        <div className="login">
          <div className="login_into">
            <label htmlFor="login">
              Username:
              <br />
              <input
                required
                value={username}
                id="login"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label htmlFor="password">
              Password:
              <br />
              <input
                required
                value={password}
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <div className="admin_panel_login_back_sign_in">
              <div className="admin_panel_login_back_sign_in_into">
                <button type="button" onClick={() => navigate(-1)}>
                  Back
                </button>
                <Link to="register">
                  <button type="button">Register</button>
                </Link>
                <button type="submit">Sign in</button>
                {/* <Link to="/adminpanel1/allcoins">
                  <button type="submit">Sign in</button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
export default Adminpanellogin;
