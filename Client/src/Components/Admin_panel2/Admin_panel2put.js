import React, { useState, useEffect } from "react";
import "../Admin_panel2/Admin_panel2.css";
import { useNavigate } from "react-router-dom";
function AdminPanel2() {
  //#region useStateslər və fetch üçün post method
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
  const [coin, setCoin] = useState([]); //edit üçün fetchden gelen məlumat bura atılıb burdan state lərə verililir ordanda value lərə bərabər edilir
  const navigate = useNavigate(); // səhifəni geriyə atmaq üçün "go back to the list"
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000${pathname}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category,
        coinname,
        denomination,
        quality,
        year,
        weight,
        price,
        country,
        metal,
        shortDesc,
        longDesc,
        linkObserve,
        linkReverse,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Changed coin's info");
      });
  };
  //#endregion
  //#region fetch coini edit etmək üçün atılır
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  let pathname = url.pathname;
  useEffect(() => {
    if (coin.length === 0) {
      //burda pathname budur adminpanel2/editcoin/:id
      fetch(`http://localhost:3000${pathname}`)
        .then((response) => response.json())
        .then((data) => setCoin(...data))
        .catch((error) => console.error(error));
    }
    setCategory(coin.category);
    setCoinname(coin.coinname);
    setDenomination(coin.denomination);
    setQuality(coin.quality);
    setYear(coin.year);
    setWeight(coin.weight);
    setPrice(coin.price);
    setCountry(coin.country);
    setMetal(coin.metal);
    setShortDesc(coin.shortDesc);
    setLongDesc(coin.longDesc);
    setLinkObserve(coin.linkObserve);
    setLinkReverse(coin.linkReverse);
    if (!localStorage.getItem("access_token")) {
      // bu hissədə localstrogedə token varmı yoxmu onu yoxlayır
      navigate("/login");
    }
  }, [coin, pathname, navigate]);

  //#endregion
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
                value={coinname}
                required
                type="text"
                onChange={(e) => setCoinname(e.target.value)}
              />
            </label>
            <label htmlFor="">
              <br />
              Face value
              <br />
              <input
                value={denomination}
                required
                type="text"
                onChange={(e) => setDenomination(e.target.value)}
              />
            </label>
            <label htmlFor="">
              <br />
              Year of issue
              <br />
              <input
                value={year}
                required
                type="text"
                onChange={(e) => setYear(e.target.value)}
              />
            </label>
            <label htmlFor="">
              <br />
              Price
              <br />
              <input
                value={price}
                required
                type="text"
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            <label htmlFor="">
              <br />
              Country
              <br />
              <input
                value={country}
                required
                type="text"
                onChange={(e) => setCountry(e.target.value)}
              />
            </label>
            <label htmlFor="">
              <br />
              Metal
              <br />
              <input
                value={metal}
                required
                type="text"
                onChange={(e) => setMetal(e.target.value)}
              />
            </label>
          </div>
          <div className="middle">
            <label htmlFor="">
              <br />
              Short description
              <br />
              <input
                value={shortDesc}
                required
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
                value={longDesc}
                required
                className="descriptions"
                type="text"
                onChange={(e) => setLongDesc(e.target.value)}
              />
            </label>
            <label htmlFor="">
              <br />
              Quality of the coin
              <br />
              <input
                value={quality}
                required
                type="text"
                onChange={(e) => setQuality(e.target.value)}
              />
            </label>
            <label htmlFor="">
              <br />
              Weight
              <br />
              <input
                value={weight}
                required
                type="text"
                onChange={(e) => setWeight(e.target.value)}
              />
            </label>
          </div>
          <div className="right">
            <div>
              <label htmlFor="">
                <br />
                Link to obverse image
                <br />
                <input
                  value={linkObserve}
                  required
                  type="text"
                  onChange={(e) => setLinkObserve(e.target.value)}
                />
              </label>
              <label htmlFor="">
                <br />
                Link to reverse image
                <br />
                <input
                  value={linkReverse}
                  required
                  type="text"
                  onChange={(e) => setLinkReverse(e.target.value)}
                />
              </label>
              <label htmlFor="">
                <br />
                Category
                <br />
                <input
                  value={category}
                  required
                  type="text"
                  onChange={(e) => setCategory(e.target.value)}
                />
              </label>
            </div>
            <div className="buttons">
              <button type="submit">Save</button>
              <button type="button" onClick={() => navigate(-1)}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
export default AdminPanel2;
