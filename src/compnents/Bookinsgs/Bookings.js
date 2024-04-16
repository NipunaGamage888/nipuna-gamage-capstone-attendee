import React, { useEffect, useState } from "react";
import axios from "axios";
import TabletsView from "../TabletViewTable/TabletsView";
import Mobile from "../MobileViewTable/Mobile";
import './Bookings.scss'

function Bookings() {
    const [parkingId, setParkingId] = useState("");
    
    useEffect(() => {
        const fetchParkingId = async () => {
          try {
            const token = localStorage.getItem("token");
    
            if (token) {
              const response = await axios.get(
                `http://localhost:8081/api/parking/profile`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
           
                setParkingId(response.data.id);
            }
          } catch (error) {
            if (error.response && error.response.status === 401) {
              alert("token not provided");
            }
            if (error.response && error.response.status === 403) {
              alert("Incorrect token");
            }
            console.error("Error fetching user ID:", error);
    
            
          }
        };
    
        fetchParkingId();
      }, []);

      console.log()
  return (
    <div className="list">
 
      <section className="list__table-web">
        <TabletsView parkingId={parkingId}/>
      </section>
      <section className="list__table-mobile">
        <Mobile parkingId={parkingId}/>
      </section>
    </div>
  );
}

export default Bookings;
