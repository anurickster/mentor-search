import React from 'react';
import { NavLink } from 'react-router-dom';

const NavList = () => {
  //   const { state, dispatch } = useContext(false);
  let state = true;
  if (state) {
    console.log(`state true`, state);
    return (
      <>
        <li className='nav-item active'>
          <NavLink
            // activeClassName='active-page'
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            // className='nav-link'
            to='/homepage'
          >
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            // activeClassName='active-page'
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            // className='nav-link'
            to='/about'
          >
            About us
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            // activeClassName='active-page'
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            // className='nav-link'
            to='/addmentor'
          >
            Mentor
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink
            // activeClassName='active-page'
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            // className='nav-link'
            to='/service'
          >
            Service
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink
            // activeClassName='active-page'
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            // className='nav-link'
            to='/contact'
          >
            Contact
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink
            // activeClassName='active-page'
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            // className='nav-link'
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
            // activeClassName='active-page'
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            // className='nav-link'
            to='/homepage'
          >
            Home{' '}
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            // activeClassName='active-page'
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            // className='nav-link'
            to='/about'
          >
            About us
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            // activeClassName='active-page'
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            // className='nav-link'
            to='/contact'
          >
            Contact
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            // activeClassName='active-page'
            className={(navData) =>
              navData.isActive ? 'active-page nav-link' : 'nav-link'
            }
            // className='nav-link'
            to='/'
          >
            log in
          </NavLink>
        </li>
      </>
    );
  }
};

export default NavList;
