import React from "react";
import './Header.scss'

import { useNavigate } from "react-router-dom";


function Header() {
    
    

    const navigate =useNavigate()
  return (
    <header className="header">
      <div className="header__main">
        <h1 className="header__heading"></h1>
        <nav className="header__nav">
          <ul className="header__list">
          
            <li onClick={()=>navigate('/bookings')} className="header__li">Bookings</li>
            <li onClick={()=>navigate('inquiry')} className="header__li">Complaints</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
