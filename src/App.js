<<<<<<< HEAD
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Addmentor from "./Components/Addmentor/Addmentor";
import Aboutpage from "./Components/Aboutpage/Aboutpage";
import Login from "./Components/Loginpage/Login";
import Register from "./Components/Register/Register";
import Contactpage from "./Components/Contactpage/Contactpage";
=======
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Addmentor from './Components/Addmentor/Addmentor';
import Aboutpage from './Components/Aboutpage/Aboutpage';
import Login from './Components/Loginpage/Login';
import Contactpage from './Components/Contactpage/Contactpage';
import React from 'react';
import './App.css';
>>>>>>> 2c714f5d7d308180736a530abd35dc9f381749a2

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/addmentor' element={<Addmentor />} />
          <Route path='/Contact' element={<Contactpage />} />
        </Routes>
        <Link to='/register'>Register</Link>
        <Link to='/'>Login</Link>

      </>
    </Router>
  );
}

export default App;
