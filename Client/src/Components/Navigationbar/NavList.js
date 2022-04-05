import React from 'react';
import { NavLink } from 'react-router-dom';

const NavList = () => {
  //   const { state, dispatch } = useContext(false);
  let state = false;
  if (state) {
    console.log(`state true`, state);
    return (
      <>
        <li className='nav-item active'>
          <NavLink
            exact
            activeClassName='active-page'
            className='nav-link'
            to='/homepage'
          >
            Home{' '}
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            exact
            activeClassName='active-page'
            className='nav-link'
            to='/aboutkdwiwdjoi'
          >
            About us
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            exact
            activeClassName='active-page'
            className='nav-link'
            to='/contact'
          >
            Contact
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            exact
            activeClassName='active-page'
            className='nav-link'
            to='/logout'
          >
            logout
          </NavLink>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li className='nav-item active'>
          <NavLink
            exact
            activeClassName='active-page'
            className='nav-link'
            to='/homepage'
          >
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            exact
            activeClassName='active-page'
            className='nav-link'
            to='/about'
          >
            About us
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            exact
            activeClassName='active-page'
            className='nav-link'
            to='/addmentor'
          >
            Mentor
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink
            exact
            activeClassName='active-page'
            className='nav-link'
            to='/service'
          >
            Service
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink
            exact
            activeClassName='active-page'
            className='nav-link'
            to='/contact'
          >
            Contact
          </NavLink>
        </li>
      </>
    );
  }
};

export default NavList;
