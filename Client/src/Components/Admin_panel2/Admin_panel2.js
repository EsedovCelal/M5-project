import React, { useState } from "react";
import "../Admin_panel2/Admin_panel2.css";
import { useNavigate } from "react-router-dom";
function Admin_panel2() {
  const [category, setCategory] = useState("");
  const [coinname, setCoinname] = useState("");
  const [denomination, setDenomination] = useState("");
  const [quality, setQuality] = useState("");
  const [year, setYear] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [country, setCountry] = useState("");
  const [metal, setMetal] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [longDesc, setLongDesc] = useState("");
  const [linkObserve, setLinkObserve] = useState("");
  const [linkReverse, setLinkReverse] = useState("");
  const navigate = useNavigate(); // səhifəni geriyə atmaq üçün "go back to the list"
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/post", {
      method: "POST",
      body: JSON.stringify({
        category: category,
        coinname: coinname,
        denomination: denomination,
        quality: quality,
        year: year,
        weight: weight,
        price: price,
        country: country,
        metal: metal,
        shortDesc: shortDesc,
        longDesc: longDesc,
        linkObserve: linkObserve,
        linkReverse: linkReverse,
      }),
      Headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error.message));
  };
  return (
    <main className="admin_panel2_main">
      <div className="admin_panel2_contain">
        <div id="admin_panel2_header">
          <h1>Admin panel</h1>
        </div>
        <form className="admin_panel2_inputs" onSubmit={handleSubmit}>
          <div className="left">
            <label htmlFor="">
              <br />
              Coin name
              <br />
              <input
                type="text"
                onChange={(e) => setCoinname(e.target.value)}
              />
            </label>
            <label htmlFor="">
              <br />
              Face value
              <br />
              <input
                type="text"
                onChange={(e) => setDenomination(e.target.value)}
              />
            </label>
            <label htmlFor="">
              <br />
              Year of issue
              <br />
              <input type="number" onChange={(e) => setYear(e.target.value)} />
            </label>
            <label htmlFor="">
              <br />
              Price
              <br />
              <input type="text" onChange={(e) => setPrice(e.target.value)} />
            </label>
            <label htmlFor="">
              <br />
              Country
              <br />
              <input type="text" onChange={(e) => setCountry(e.target.value)} />
            </label>
            <label htmlFor="">
              <br />
              Metal
              <br />
              <input type="text" onChange={(e) => setMetal(e.target.value)} />
            </label>
          </div>
          <div className="middle">
            <label htmlFor="">
              <br />
              Short description
              <br />
              <input
                className="descriptions"
                type="text"
                onChange={(e) => setShortDesc(e.target.value)}
              />
            </label>
            <label htmlFor="">
              <br />
              Long description
              <br />
              <input
                className="descriptions"
                type="text"
                onChange={(e) => setLongDesc(e.target.value)}
              />
            </label>
            <label htmlFor="">
              <br />
              Quality of the coin
              <br />
              <input type="text" onChange={(e) => setQuality(e.target.value)} />
            </label>
            <label htmlFor="">
              <br />
              Weight
              <br />
              <input type="text" onChange={(e) => setWeight(e.target.value)} />
            </label>
          </div>
          <div className="right">
            <div>
              <label htmlFor="">
                <br />
                Link to obverse image
                <br />
                <input
                  type="text"
                  onChange={(e) => setLinkObserve(e.target.value)}
                />
              </label>
              <label htmlFor="">
                <br />
                Link to reverse image
                <br />
                <input
                  type="text"
                  onChange={(e) => setLinkReverse(e.target.value)}
                />
              </label>
              <label htmlFor="">
                <br />
                Category
                <br />
                <input
                  type="text"
                  onChange={(e) => setCategory(e.target.value)}
                />
              </label>
            </div>
            <div className="buttons">
              <button type="submit">Save</button>
              <button onClick={() => navigate(-1)}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
export default Admin_panel2;
