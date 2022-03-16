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
        <input type='submit' onClick={handlesubmit} className='button' />
      </form>
    </center>
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
