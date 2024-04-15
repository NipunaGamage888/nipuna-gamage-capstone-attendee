import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TabletView.scss";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TabletsView(props) {
  const [parkings, setParkings] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredParkings, setFilteredParkings] = useState([]);
  const [showFiltered, setShowFiltered] = useState(false);
  useEffect(() => {
    const parkings = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/api/booking/information/${props.parkingId}`
        );
        if (response.status === 200) {
            console.log(response)
            setParkings(response.data);
          } else {
            console.error("No parking data available");
          }
        //
        //setParkings(response.data);
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
    <div className="table">
      <div className="table__search-container">
        <input
          className="table__search"
          type="text"
          placeholder="Enter Vehicle Number..."
          value={search}
          onChange={handleSearchInputChange}
        />
        <button className="table__button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {/*<table className="table__table-view" >
        <thead className="table__head">
          <tr>
            <th className="table__title">
              <p className="table__heading">Vehicle Numbeer</p>
            </th>
            <th className="table__title">
              <p className="table__heading">Starting Time</p>
            </th>
            <th className="table__title">
              <p className="table__heading">Expiry Time</p>
            </th>
            <th className="table__title">
              <p className="table__heading">User ID</p>
            </th>
          </tr>
        </thead>
  <tbody className="table__body">*/}
      {showFiltered ? (
        filteredParkings.map((parking) => (
          <div className="table__body-title" key={parking.id}>
            <div className="table__info">
              <h2>vehicle_number</h2>
              <p className="table__info-name">{parking.vehicle_num}</p>
            </div>
            <div className="table__info">
              <h2>Starting_time</h2>
              <p className="table__info-name">{parking.starting_Time}</p>
            </div>
            <div className="table__info">
              <h2>Expiry Time</h2>
              <p className="table__info-name">{parking.expiry_Time}</p>
            </div>
            <div className="table__info">
              <h2>User ID</h2>
              <p className="table__info-name">
                {parking.user_id === null ? "Guest" : parking.user_id}
              </p>
            </div>
            
          </div>
        ))
      ) : parkings.length > 0 ? (
        parkings.map((parking) => (
          <div className="table__body-title" key={parking.id}>
          <div className="table__info">
            <h2>vehicle_number</h2>
            <p className="table__info-name">{parking.vehicle_num}</p>
          </div>
          <div className="table__info">
            <h2>Starting_time</h2>
            <p className="table__info-name">{parking.starting_Time}</p>
          </div>
          <div className="table__info">
            <h2>Expiry Time</h2>
            <p className="table__info-name">{parking.expiry_Time}</p>
          </div>
          <div className="table__info">
            <h2>User ID</h2>
            <p className="table__info-name">
              {parking.user_id === null ? "Guest" : parking.user_id}
            </p>
          </div>
          
        </div>
        ))
      ) : (
        <div>
          <div colSpan="5">No parkings Available in this warehouse</div>
        </div>
      )}
    </div>
  );
}

export default TabletsView;
