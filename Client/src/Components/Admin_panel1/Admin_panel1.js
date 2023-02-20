import React, { useEffect, useState } from "react";
import "../Admin_panel1/Admin_panel1.css";
import circle from "../../icons/circle.svg";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

// import jwt from "jsonwebtoken";
function AdminPanel1() {
  const [coin, setCoin] = useState([]);
  const [inputvalue, setInputvalue] = useState(""); // q = ? seach üçün inputun valuesi bura atılır
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0); // pagination üçün
  useEffect(() => {
    fetch(`http://localhost:3000/adminpanel1/allcoins`)
      .then((response) => response.json())
      .then((data) => setCoin(data))
      .catch((error) => console.error(error));
    if (!localStorage.getItem("access_token")) {
      // bu hissədə localstrogedə token varmı yoxmu onu yoxlayır
      navigate("/login");
    }
  }, [navigate]);
  const deleteitem = (event) => {
    const answer = window.confirm("Are you sure delete this coin ");
    if (answer) {
      fetch(`http://localhost:3000/adminpanel1/delete/${event.target.id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => alert(data))
        .catch((error) => console.error(error));
      let filtered = coin.filter(
        (coin_one) => parseInt(coin_one.id) !== parseInt(event.target.id)
      );
      setCoin(filtered);
    }
  };
  const fetchforSeach = () => {
    //fetch atılır seachdə yazılan sözlərə görə
    fetch(`http://localhost:3000/adminpanel1?q=${inputvalue}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          return setCoin(data);
        }
        setCoin(data);
      })
      .catch((error) => console.error(error));
  };
  //#region //pagination üçün istifadə edilən kod
  const PER_PAGE = 3;
  const offset = currentPage * PER_PAGE;
  const currentPageData = coin.slice(offset, offset + PER_PAGE).map((coin) => (
    <div key={coin.id} className="coin_info">
      <div>
        <img src={coin.linkObserve} alt="" />
      </div>
      <div className="text">
        <h1>{coin.coinname}</h1>
        <p>{coin.shortDesc}</p>
      </div>
      <div>
        <Link to={`/adminpanel2/editcoin/${coin.id}`}>
          <button>Edit</button>
        </Link>
        {/* editə basib coini edit etmək üçün adminpanel2 bölməsinə yəni add coin componentinə keçid edir*/}
      </div>
      <div>
        <button id={coin.id} onClick={deleteitem}>
          Delete
        </button>
      </div>
    </div>
  ));
  const pageCount = Math.ceil(coin.length / PER_PAGE);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  //#endregion
  return (
    <main className="admin_panel1_main">
      <div className="content">
        <header>
          <h1>Admin panel</h1>
        </header>
        <div className="admin_panel1_seach_place">
          <label>Input field</label>
          <br />
          <input
            value={inputvalue}
            onChange={(e) => setInputvalue(e.target.value)}
            className="admin_panel1_seach_place_input"
          />
          <button onClick={fetchforSeach} className="seach_button">
            Seach
          </button>
          <br />
        </div>
      </div>
      <div className="commun_coin_info">
        {coin.length === 0 ? (
          <div id="admin_panel1_empty_coin">
            <h1>There is no coin</h1>
          </div>
        ) : (
          <div className="admin_panel1_pagination">
            <div className="admin_panel1_pagination_coins">
              {currentPageData}
            </div>
            <div className="admin_panel1_pagination_reactpaginate">
              <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
              />
            </div>
          </div>
        )}
        <div className="add_new_coin">
          <Link to="/adminpanel2">
            <img src={circle} alt="circle" />
          </Link>
          <Link to="/adminpanel2">Add a new coin</Link>
        </div>
      </div>
    </main>
  );
}
export default AdminPanel1;
