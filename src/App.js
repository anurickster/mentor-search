<<<<<<< HEAD
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Addmentor from "./Components/Addmentor/Addmentor";
import Aboutpage from "./Components/Aboutpage/Aboutpage";
import Login from "./Components/Loginpage/Login";
import Contactpage from "./Components/Contactpage/Contactpage";
=======
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Addmentor from './Components/Addmentor/Addmentor';
import Aboutpage from './Components/Aboutpage/Aboutpage';
import Login from './Components/Loginpage/Login';
>>>>>>> 2f8f9a2354de5ffdc1342e30a41ae9c0f87d514c

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/addmentor' element={<Addmentor />} />
          <Route path='/Contact' element={<Contactpage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
