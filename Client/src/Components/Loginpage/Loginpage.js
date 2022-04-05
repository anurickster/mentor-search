import React from 'react';
import { useState } from 'react';
import './module.Login.css';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

export default function Loginpage() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setpPassword] = useState('');
  const [emailerror, setEmailError] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) {
      setEmailError('Email reqired');
    }
    if (!password) {
      setError('Password reqiured');
    }
    if (!email.includes('@')) {
      setEmailError('Email reqired');
    } else {
      setEmailError(null);
      setError(null);
      navigate('/homepage');
    }
  }
  console.log(email);
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light '>
        <a className='navbar-brand mx-5' href='/'>
          FindMentor
        </a>
        <NavLink
          style={{ marginLeft: '70vmax' }}
          className='nav-link'
          to='/register'
        >
          Not Registered ?
        </NavLink>

        <div
          className='collapse navbar-collapse justify-content-end mx-5'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav ml-auto '></ul>
        </div>
      </nav>
      <div className='form-main'>
        <form className='auth-form'>
          <label htmlFor='email'>Email address</label>
          <br />
          <br />
          <input
            type='email'
            id='email'
            className='form-control'
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            required
          />
          <span className='required'>{emailerror}</span>
          <br />
          <label htmlFor='password'>Password</label>
          <br />
          <br />
          <input
            type='password'
            id='password'
            className='form-control'
            onChange={(e) => setpPassword(e.target.value)}
            placeholder='Enter your password'
          />
          <span className='required'>{error}</span>
          <br />
          <br />
          <center>
            <button
              type='submit'
              onClick={handleSubmit}
              className='btn btn-primary'
            >
              Login
            </button>
          </center>
        </form>
      </div>
    </>
  );
}
