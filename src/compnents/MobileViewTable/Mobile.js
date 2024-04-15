import React, { useEffect, useState } from "react";
import "./Mobile.scss";
import axios from "axios";
import "./Mobile.scss";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Mobile() {
  const [parkings, setParkings] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredParkings, setFilteredParkings] = useState([]);
  const [showFiltered, setShowFiltered] = useState(false);
  useEffect(() => {
    const parkings = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/api/booking/information/${1}`
        );
        setParkings(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    parkings();
  }, []);

  const handleSearchInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    const filtered = parkings.filter((parking) =>
      parking.vehicle_num.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredParkings(filtered);
    setShowFiltered(true);
  };
  return (
    <div className="main-mobile">
      <div className="main-mobile__search-container">
        <input
          className="main-mobile__search"
          type="text"
          placeholder="Enter Vehicle Number..."
          value={search}
          onChange={handleSearchInputChange}
        />
        <button className="main-mobile__button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {showFiltered ? (
        filteredParkings.map((parking) => (
          <section
            className="main-mobile__first-sec"
            key={parking.inventory_id}
          >
            <section className=" main-mobile__info">
              <div className="main-mobile__cat-name">
                <div className="main-mobile__name-info">
                  <h3 className="main-mobile__item-heading">Vehicle number</h3>
                  <div className="main-mobile__name-attribute">
                    <p className="main-mobile__name">{parking.vehicle_num}</p>
                  </div>
                </div>
                <div className="man-mobile__cat-info">
                  <h3 className="main-mobile__item-heading">Starting Time</h3>
                  <p className="main-mobile__category-name">
                    {parking.starting_Time}
                  </p>
                </div>
              </div>
              <div className="main-mobile__stat-QTY">
                <div className="main-mobile__status">
                  <h3 className="main-mobile__item-heading">Expiry_Time</h3>
                  <p className="main-mobile__status-info">
                    {parking.expiry_Time}
                  </p>
                </div>
                <div>
                  <h3 className="main-mobile__item-heading">User ID</h3>
                  <p className="main-mobile__category-name">
                    {parking.user_id === null ? "Guest" : parking.user_id}
                  </p>
                </div>
              </div>
            </section>
          </section>
        ))
      ) : parkings.length > 0 ? (
        parkings.map((parking) => (
          <section
            className="main-mobile__first-sec"
            key={parking.inventory_id}
          >
            <section className=" main-mobile__info">
              <div className="main-mobile__cat-name">
                <div className="main-mobile__name-info">
                  <h3 className="main-mobile__item-heading">Vehicle number</h3>
                  <div className="main-mobile__name-attribute">
                    <p className="main-mobile__name">{parking.vehicle_num}</p>
                  </div>
                </div>
                <div className="man-mobile__cat-info">
                  <h3 className="main-mobile__item-heading">Starting Time</h3>
                  <p className="main-mobile__category-name">
                    {parking.starting_Time}
                  </p>
                </div>
              </div>
              <div className="main-mobile__stat-QTY">
                <div className="main-mobile__status">
                  <h3 className="main-mobile__item-heading">Expiry_Time</h3>
                  <p className="main-mobile__status-info">
                    {parking.expiry_Time}
                  </p>
                </div>
                <div>
                  <h3 className="main-mobile__item-heading">User ID</h3>
                  <p className="main-mobile__category-name">
                    {parking.user_id === null ? "Guest" : parking.user_id}
                  </p>
                </div>
              </div>
            </section>
          </section>
        ))
      ) : (
        <p>No parkings Available in this warehouse</p>
      )}
    </div>
  );
}

export default Mobile;
