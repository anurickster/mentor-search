// import React, { useState } from "react";
// import "./Login.scss";
// import { Link } from "react-router-dom";

// function Login() {
//   const [emailval, setemailval] = useState("");
//   const [passval, setpassval] = useState("");

//   const handlesubmit = (event) => {
//     event.preventDefault();
//   };
//   return (
//     <div className='main-login'>
//       Login Page
//       <br />
//       <Link to='/register'>Register</Link>
//       <div className='login-contain'>
//         <div className='left-side'>
//           <form onSubmit={handlesubmit}>
//             <lable for='emil1'>Email</lable>
//             <input
//               placeholder='Enter Your Email'
//               type='email'
//               value={setemailval}
//               onchange={(e) => {
//                 setemailval(e.target.value);
//               }}
//               id='emil1'
//             />
//             <lable for='pwd1'>Password</lable>

//             <input
//               placeholder='Enter Your Password'
//               type='password'
//               value={passval}
//               onchange={(e) => {
//                 setpassval(e.target.value);
//               }}
//               id='pwd1'
//             />
//             <button id='sub_butt'>Submit</button>
//           </form>
//         </div>
//         <div className='right-side'></div>
//       </div>
//     </div>
//   );
// }
// =======
// import React from "react";
// import { useState } from "react";
// import "./module.Login.css";
// import { useNavigate } from "react-router";

import React from 'react';
import { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './module.Login.css';
import { useNavigate } from 'react-router';

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

// import React from 'react';
// import { Formik, Form } from 'formik';
// import * as Yup from 'yup';
// import FormikControl from './FormikControl';

// function Login() {
//   const initialValues = {
//     email: '',
//     password: '',
//   };

//   const validationSchma = Yup.object({
//     email: Yup.string()
//       .email('Invalid email')
//       .required('Required'),
//     password: Yup.string.required('Required'),
//   });

//   const onSubmit = (values) => {
//     console.log('Form data', values);
//   };

//   return (
//     // <>
//     //   <h1>Login</h1>
//     // </>
//     <Formik
//       initialValues={initialValues}
//       validationSchma={validationSchma}
//       onSubmit={onSubmit}
//     >
//       {(formik) => {
//         return (
//           <Form>
//             <FormikControl
//               control='input'
//               type='email'
//               label='Email'
//               name='email'
//             />
//             <FormikControl
//               control='input'
//               type='password'
//               label='Password'
//               name='password'
//             />
//             <button
//               type='submit'
//               disabled={!formik.isValid}
//               className='btn btn-primary'
//             >
//               Login
//             </button>
//           </Form>
//         );
//       }}
//     </Formik>
//   );
// }

// export default Login;
