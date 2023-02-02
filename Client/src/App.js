import React from "react";
import Homepage1 from "./Components/Homepage1/Homepage1";
import Homepage2 from "./Components/Homepage2/Homepage2";
import Listofthecoins from "./Components/List_of_the_coins/List_of_the_coins";
import Adminpanellogin from "./Components/Admin_panel_login/Admin_panel_login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage1 />} />
        <Route path="/advancedfilter" element={<Homepage2 />} />
        <Route path="/listofthecoins" element={<Listofthecoins />} />
        <Route path="/login" element={<Adminpanellogin />} />
      </Routes>
    </div>
  );
}
export default App;
