import React from "react";
import Homepage1 from "./Components/Homepage1/Homepage1";
import Listofthecoins from "./Components/List_of_the_coins/List_of_the_coins";
import Adminpanellogin from "./Components/Admin_panel_login/Admin_panel_login";
import Adminpanelloginregister from "./Components/Admin_panel_login/Admin_panel_login_register";
import AdminPanel1 from "./Components/Admin_panel1/Admin_panel1";
import AdminPanel2put from "./Components/Admin_panel2/Admin_panel2put";
import AdminPanel2post from "./Components/Admin_panel2/Admin_panel2post";
import CoinDescription from "./Components/Coin's_description/Coin's_description";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage1 />} />
        <Route path="/listofthecoins" element={<Listofthecoins />} />
        <Route path="/bullion" element={<Listofthecoins />} />
        <Route path="/exclusive" element={<Listofthecoins />} />
        <Route path="/commemorative" element={<Listofthecoins />} />
        <Route path="/login" element={<Adminpanellogin />} />
        <Route path="/login/register" element={<Adminpanelloginregister />} />
        <Route path="/adminpanel1/allcoins" element={<AdminPanel1 />} />
        <Route path="/adminpanel2/editcoin/*" element={<AdminPanel2put />} />
        <Route path="/adminpanel2" element={<AdminPanel2post />} />
        <Route path="/description/*" element={<CoinDescription />} />
      </Routes>
    </div>
  );
}
export default App;
