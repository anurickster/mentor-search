/* Ashwini Code
import React, { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

function Login() {
  const [emailval, setemailval] = useState("");
  const [passval, setpassval] = useState("");

  const handlesubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className='main-login'>
      Login Page
      <br />
      <Link to='/register'>Register</Link>
      <div className='login-contain'>
        <div className='left-side'>
          <form onSubmit={handlesubmit}>
            <lable for='emil1'>Email</lable>
            <input
              placeholder='Enter Your Email'
              type='email'
              value={setemailval}
              onchange={(e) => {
                setemailval(e.target.value);
              }}
              id='emil1'
            />
            <lable for='pwd1'>Password</lable>

            <input
              placeholder='Enter Your Password'
              type='password'
              value={passval}
              onchange={(e) => {
                setpassval(e.target.value);
              }}
              id='pwd1'
            />
            <button id='sub_butt'>Submit</button>
          </form>
        </div>
        <div className='right-side'></div>
      </div>
    </div>
  );
}

export default Login;

// */

// /* upendhar code
import React from 'react';
import { useState } from 'react';
import './module.Login.css';
import { useNavigate } from 'react-router';

export default function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setpPassword] = useState('');
  const [emailerror, setEmailError] = useState('');
  const [error, setError] = useState('');

  function handlesubmit(e) {
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
    <center>
      <header>
        <h1>Mentor-Search APP</h1>
      </header>
      <form>
        <label htmlFor='email'>Email</label>
        <br />
        <input
          type='email'
          id='email'
          className='input'
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email'
          required
        />
        <br />
        <span>{emailerror}</span>
        <br />
        <label htmlFor='password'>Password</label>
        <br />
        <input
          type='password'
          id='password'
          className='input'
          onChange={(e) => setpPassword(e.target.value)}
          placeholder='Enter your password'
        />
        <br />
        <span>{error}</span>
        <br />
        <input
          type='submit'
          onClick={handlesubmit}
          className='btn btn-primary'
        />
      </form>
    </center>
  );
}

// */

/*
//Anurag Code
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
function Login() {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchma = Yup.object({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string.required('Required'),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
  };

  return (
    // <>
    //   <h1>Login</h1>
    // </>
    <Formik
      initialValues={initialValues}
      validationSchma={validationSchma}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control='input'
              type='email'
              label='Email'
              name='email'
            />
            <FormikControl
              control='input'
              type='password'
              label='Password'
              name='password'
            />
            <button
              type='submit'
              disabled={!formik.isValid}
              className='btn btn-primary'
            >
              Login
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
*/
