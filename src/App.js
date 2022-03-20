import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Addmentor from "./Components/Addmentor/Addmentor";
import Aboutpage from "./Components/Aboutpage/Aboutpage";
import Login from "./Components/Loginpage/Login";
import Register from "./Components/Register/Register";
import Contactpage from "./Components/Contactpage/Contactpage";
import Service from "./Components/Servicepage/Service";
import Footer from "./Components/Footerpage/Footer";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path='/' element={<Login />} />

          <Route path='/register' element={<Register />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/addmentor' element={<Addmentor />} />
          <Route path='/service' element={<Service />} />
          <Route path='/Contact' element={<Contactpage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
