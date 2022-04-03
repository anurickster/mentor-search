import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './module.Navigationbar.css';

const Navigationbar = () => {
  const [show, setShow] = useState(false);
  // const [auth, setAuth] = useSelector(false); // get state in this component auth: true // using use selector //

  return (
    <>
      <section className='navbar-bg'>
        <nav className='navbar navbar-expand-lg navbar-light '>
          <div className='container'>
            <a className='navbar-brand text-white' href='/homepage'>
              FindMentor.com
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShow(!show)}
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? 'show' : ''}`}>
              <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link active'
                    aria-current='page'
                    to='/homepage'
                  >
                    Home
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/about'>
                    About
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/addmentor'>
                    Mentor
                  </NavLink>
                </li>

                <li className='nav-item'>
                  <NavLink className='nav-link' to='/service'>
                    Services
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/contact'>
                    Contact
                  </NavLink>
                </li>
              </ul>
              <form className='d-flex'>
                <button className='btn  btn-style' type='submit'>
                  Log in
                </button>
                <button
                  className='btn  btn-style btn-style-border'
                  type='submit'
                >
                  Log Out
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navigationbar;
