import React from 'react';
import './module.Login.css';
import { useNavigate } from 'react-router';
import loginpic from '../Signuppage/Images/login2.webp';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Loginpage() {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(10, 'Password must be at most 10 characters'),
    }),
    onSubmit: async (values) => {
      console.log(values);
      const res = await fetch('http://localhost:9000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      console.log(data);
      if (data.auth) {
        navigate('/homepage');
      } else if (data.error === 'Invalid password') {
        alert('Invalid password');
      } else {
        alert('Invalid Credentials');
      }
    },
  });

  function handleSign() {
    navigate('/homepage');
  }

  return (
    <div>
      <section className='sign-in'>
        <div className='container mt-5'>
          <div className='signin-content'>
            <div className='signin-image'>
              <figure>
                <img src={loginpic} alt='login pic' />
              </figure>
              <NavLink to='/register' className='signup-image-link'>
                Create an Account!
              </NavLink>
            </div>
            <div className='signin-form'>
              <h2 className='form-title'>Log-In</h2>
              <form onSubmit={formik.handleSubmit} className='auth-form'>
                <div className='form-group'>
                  {/* <label htmlFor='email'>
                    <i class='zmdi zmdi-email material-icons-name'></i>
                  </label> */}
                  <input
                    type='email'
                    name='email'
                    id='email'
                    autoComplete='off'
                    placeholder='Please Enter Your Email..'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className='form-control'
                  />
                </div>
                <div className='form-group'>
                  {/* <label htmlFor='password'>
                    <i class='zmdi zmdi-lock material-icons-name'></i>
                  </label> */}
                  <input
                    type='password'
                    placeholder='Enter your password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    name='password'
                    id='password'
                    className='form-control'
                  />
                  <span className='required'>{formik.errors.password}</span>
                  <div className='form-group form-button'>
                    <input
                      type='submit'
                      name='signin'
                      id='signin'
                      className='form-submit'
                      value='Log In'
                      onClick={handleSign}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
