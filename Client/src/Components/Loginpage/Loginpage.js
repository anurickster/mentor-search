// import React from 'react';
// import { useState } from 'react';
// import './module.Login.css';
// import { useNavigate } from 'react-router';
// import { NavLink } from 'react-router-dom';

// export default function Loginpage() {
//   let navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setpPassword] = useState('');
//   const [emailerror, setEmailError] = useState('');
//   const [error, setError] = useState('');

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!email) {
//       setEmailError('Email reqired');
//     }
//     if (!password) {
//       setError('Password reqiured');
//     }
//     if (!email.includes('@')) {
//       setEmailError('Email reqired');
//     } else {
//       setEmailError(null);
//       setError(null);
//       navigate('/homepage');
//     }
//   }
//   console.log(email);
//   return (
//     <>
//       <nav className='navbar navbar-expand-lg navbar-light bg-light '>
//         <a className='navbar-brand mx-5' href='/'>
//           FindMentor
//         </a>
//         <NavLink
//           style={{ marginLeft: '70vmax' }}
//           className='nav-link'
//           to='/register'
//         >
//           Not Registered ?
//         </NavLink>
//         <div
//           className='collapse navbar-collapse justify-content-end mx-5'
//           id='navbarSupportedContent'
//         >
//           <ul className='navbar-nav ml-auto '></ul>
//         </div>
//       </nav>
//       <div className='form-main'>
//         <form className='auth-form'>
//           <label htmlFor='email'>Email address</label>
//           <br />
//           <br />
//           <input
//             type='email'
//             id='email'
//             className='form-control'
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder='Enter your email'
//             required
//           />
//           <span className='required'>{emailerror}</span>
//           <br />
//           <label htmlFor='password'>Password</label>
//           <br />
//           <br />
//           <input
//             type='password'
//             id='password'
//             className='form-control'
//             onChange={(e) => setpPassword(e.target.value)}
//             placeholder='Enter your password'
//           />
//           <span className='required'>{error}</span>
//           <br />
//           <br />
//           <center>
//             <button
//               type='submit'
//               onClick={handleSubmit}
//               className='btn btn-primary'
//             >
//               Login
//             </button>
//           </center>
//         </form>
//       </div>
//     </>
//   );
// }

import React from 'react';
import './module.Login.css';
import { useNavigate } from 'react-router';
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
        .min(5, 'Password must be at least 5 characters')
        .max(10, 'Password must be at most 10 characters'),
    }),
    onSubmit: (values) => {
      console.log(values);
      navigate('/homepage');
    },
  });

  return (
    <div>
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
      <center className='form-main'>
        <form onSubmit={formik.handleSubmit} className='auth-form'>
          <label htmlFor='email'>Email address</label>
          <br />
          <input
            type='email'
            placeholder='Enter your email'
            onChange={formik.handleChange}
            value={formik.values.email}
            name='email'
            id='email'
            className='form-control'
          />
          <span className='required'>{formik.errors.email}</span>
          <br />
          <label htmlFor='password'>Password</label>
          <br />
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
          <br />
          <br />
          <br />
          <button type='submit' className='btn btn-primary'>
            Login
          </button>
        </form>
      </center>
    </div>
  );
}
