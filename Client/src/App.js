import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Mentor from "./Components/Mentor/Mentor";
import Aboutpage from "./Components/Aboutpage/Aboutpage";
import Loginpage from "./Components/Loginpage/Loginpage";
import Register from "./Components/Register/Register";
import Contactpage from "./Components/Contactpage/Contactpage";
import Service from "./Components/Servicepage/Service";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/" element={<Loginpage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/addmentor" element={<Mentor />} />
          <Route path="/addmentor/:id" element={<Mentor />} />
          <Route path="/service" element={<Service />} />
          <Route path="/Contact" element={<Contactpage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
