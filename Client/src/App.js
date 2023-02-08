import React from "react";
import Homepage1 from "./Components/Homepage1/Homepage1";
// import Homepage2 from "./Components/Homepage2/Homepage2";
import Listofthecoins from "./Components/List_of_the_coins/List_of_the_coins";
import Adminpanellogin from "./Components/Admin_panel_login/Admin_panel_login";
import Admin_panel1 from "./Components/Admin_panel1/Admin_panel1";
import Admin_panel2put from "./Components/Admin_panel2/Admin_panel2put";
import Admin_panel2post from "./Components/Admin_panel2/Admin_panel2post";
import Coin_description from "./Components/Coin's_description/Coin's_description";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage1 />} />
        {/* <Route path="/advancedfilter" element={<Homepage2 />} /> */}
        <Route path="/listofthecoins" element={<Listofthecoins />} />

        <Route path="/bullion" element={<Listofthecoins />} />
        <Route path="/exclusive" element={<Listofthecoins />} />
        <Route path="/commemorative" element={<Listofthecoins />} />

        <Route path="/login" element={<Adminpanellogin />} />
        <Route path="/adminpanel1/allcoins" element={<Admin_panel1 />} />
        <Route path="/adminpanel2/editcoin/*" element={<Admin_panel2put />} />
        <Route path="/adminpanel2" element={<Admin_panel2post />} />
        <Route path="/description/*" element={<Coin_description />} />
      </Routes>
    </div>
  );
}
export default App;
