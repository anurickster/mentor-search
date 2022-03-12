import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './module.Navigationbar.css';

const Navigationbar = () => {
  return (
    <div style={{ marginBottom: '5rem' }}>
      <Navbar bg='dark' fixed='top' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>
            <span className='nav-brand'>FindMentor.com</span>
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/' className='navlink'>
              Home
            </Nav.Link>

            <Nav.Link as={Link} to='/about' className='navlink'>
              About
            </Nav.Link>

            <Nav.Link as={Link} to='/admin' className='navlink'>
              Admin
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
