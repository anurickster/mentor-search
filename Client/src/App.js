import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Mentor from './Components/Mentor/Mentor';
import Aboutpage from './Components/Aboutpage/Aboutpage';
import Loginpage from './Components/Loginpage/Loginpage';
import Contactpage from './Components/Contactpage/Contactpage';
import Service from './Components/Servicepage/Service';
import Signuppage from './Components/Signuppage/Signuppage';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<Loginpage />} />
          <Route path='/register' element={<Signuppage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/service' element={<Service />} />
          <Route path='/Contact' element={<Contactpage />} />
          <Route element={<PrivateRoute />}>
            <Route path='/homepage' element={<Homepage />} />
            <Route path='/addmentor' element={<Mentor />} />
            <Route path='/addmentor/:id' element={<Mentor />} />
          </Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;

function PrivateRoute() {
  const authStatus = localStorage.getItem('auth');
  return <div>{authStatus === 'true' ? <Outlet /> : <Navigate to='/' />}</div>;
}
