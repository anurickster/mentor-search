import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import "./module.Navigationbar.css";

// const Navigationbar = () => {
//   return (
//     <div style={{ marginBottom: '5rem' }}>
//       <Navbar bg='dark' fixed='top' variant='dark'>
//         <Container>
//           <Navbar.Brand href='/'>
//             <span className='nav-brand'>FindMentor.com</span>
//           </Navbar.Brand>
//           <Nav className='me-auto'>
//             <Nav.Link as={Link} to='/homepage' className='navlink'>
//               Home
//             </Nav.Link>

//             <Nav.Link as={Link} to='/about' className='navlink'>
//               About
//             </Nav.Link>

//             <Nav.Link as={Link} to='/addmentor' className='navlink'>
//               Add Mentor
//             </Nav.Link>

//             <Nav.Link as={Link} to='/contact' className='navlink'>
//               Contact Us
//             </Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default Navigationbar;

const Navigationbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className='navbar-bg'>
        <nav class='navbar navbar-expand-lg navbar-light '>
          <div class='container'>
            <a class='navbar-brand text-white' href='#'>
              FindMentor.com
            </a>
            <button
              class='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShow(!show)}
            >
              <span class='navbar-toggler-icon'></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class='navbar-nav ms-auto mb-2 mb-lg-0'>
                <li class='nav-item'>
                  <NavLink class='nav-link active' aria-current='page' to='/'>
                    Home
                  </NavLink>
                </li>
                <li class='nav-item'>
                  <NavLink class='nav-link' to='/about'>
                    About
                  </NavLink>
                </li>
                <li class='nav-item'>
                  <NavLink class='nav-link' to='/addmentor'>
                    Add Mentor
                  </NavLink>
                </li>

                <li class='nav-item'>
                  <NavLink class='nav-link' to='/service'>
                    Services
                  </NavLink>
                </li>
                <li class='nav-item'>
                  <NavLink class='nav-link' to='/contact'>
                    Contact
                  </NavLink>
                </li>
              </ul>
              <form class='d-flex'>
                <button class='btn  btn-style' type='submit'>
                  Log in
                </button>
                <button class='btn  btn-style btn-style-border' type='submit'>
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
