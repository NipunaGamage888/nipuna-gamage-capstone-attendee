import React from "react";
import TabletsView from "../TabletViewTable/TabletsView";
import Mobile from "../MobileViewTable/Mobile";
import './Bookings.scss'

function Bookings() {
  return (
    <div className="list">
 
      <section className="list__table-web">
        <TabletsView/>
      </section>
      <section className="list__table-mobile">
        <Mobile/>
      </section>
    </div>
  );
}

export default Bookings;
