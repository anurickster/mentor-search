import React from 'react';
import { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './module.Login.css';
import { useNavigate } from 'react-router';

export default function Login() {
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
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>
            <span className='nav-brand'>FindMentor.com</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
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
