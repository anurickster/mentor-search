import React from 'react';
import { NavLink } from 'react-router-dom';

const NavList = () => {
  //   const { state, dispatch } = useContext(false);
  let state = localStorage.getItem('auth');

  if (state === 'true') {
    return (
      <>
        <li className='nav-item active'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            to='/homepage'
          >
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            to='/about'
          >
            About us
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            to='/addmentor'
          >
            Mentor
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            to='/service'
          >
            Service
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            to='/contact'
          >
            Contact
          </NavLink>
        </li>

        <li className='nav-item' onClick={() => localStorage.clear()}>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            to='/'
          >
            Log out
          </NavLink>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li className='nav-item active'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            to='/homepage'
          >
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            to='/about'
          >
            About us
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
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
