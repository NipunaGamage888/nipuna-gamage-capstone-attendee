import Bookings from "./compnents/Bookinsgs/Bookings";
import Header from "./compnents/Header/Header";
import './App.scss'
import Complain from "./compnents/Complain/Complain";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Bookings/>}/>
        <Route path="/inquiry" element={<Complain/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
