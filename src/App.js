import Bookings from "./compnents/Bookinsgs/Bookings";
import Header from "./compnents/Header/Header";
import './App.scss'
import Complain from "./compnents/Complain/Complain";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "./compnents/Login/Login";
import { useEffect, useState } from "react";


function App() {
    const [showHeader, setShowHeader] = useState(true);
    

    useEffect(() => {
      const handleShowHeader = () => {
        if(window.location.pathname !== "/"){
          setShowHeader(true)
        }else{
          setShowHeader(false)
        }
      };
      handleShowHeader()
    } , []);
  
  return (

    <BrowserRouter>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/bookings" element={<Bookings/>}/>
        <Route path="/inquiry" element={<Complain/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
