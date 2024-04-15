import React from "react";
import './Header.scss'
function Header() {
  return (
    <header className="header">
      <div className="header__main">
        <h1 className="header__heading"></h1>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__li">Bookings</li>
            <li className="header__li">Complaints</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
