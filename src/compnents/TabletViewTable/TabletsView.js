import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TabletView.scss";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TabletsView() {
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
    <div className="table">
      <div className="table__search-container">
        <input
        className="table__search"
          type="text"
          placeholder="Enter Vehicle Number..."
          value={search}
          onChange={handleSearchInputChange}
        />
        <button className="table__button" onClick={handleSearch}>Search</button>
      </div>
      <table >
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
        <tbody className="table__body">
        {showFiltered
            ? filteredParkings.map((parking) => (
                <tr className="table__body-title" key={parking.id}>
                  <td className="table__info">
                    <p className="table__info-name">{parking.vehicle_num}</p>
                  </td>
                  <td className="table__info">{parking.starting_Time}</td>
                  <td className="table__info">
                    <p className="table__info">{parking.expiry_Time}</p>
                  </td>
                  <td className="table__info">
                    {parking.user_id === null ? "Guest" : parking.user_id}
                  </td>
                  <td className="table__info"></td>
                </tr>
              ))
            :
          parkings.length > 0 ? (
            parkings.map((parking) => (
              <tr className="table__body-title" key={parking.id}>
                <td className="table__info">
                  <p className="table__info-name">{parking.vehicle_num} </p>
                </td>
                <td className="table__info">{parking.starting_Time}</td>
                <td className="table__info">
                  <p className="table__info">{parking.expiry_Time}</p>
                </td>
                <td className="table__info">
                  {parking.user_id === null ? "Guest" : parking.user_id}
                </td>
                <td className="table__info"></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No parkings Available in this warehouse</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TabletsView;
