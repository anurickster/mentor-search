import React from 'react';
// import { Formik, Form } from 'formik';
// import * as Yup from 'yup';
// import FormikControl from './FormikControl';

function Login() {
  // const initialValues = {
  //   email: '',
  //   password: '',
  // };

  // const validationSchma = Yup.object({
  //   email: Yup.string()
  //     .email('Invalid email')
  //     .required('Required'),
  //   password: Yup.string.required('Required'),
  // });

  // const onSubmit = (values) => {
  //   console.log('Form data', values);
  // };

  return (
    <>
      <h1>Login</h1>
    </>
    // <Formik
    //   initialValues={initialValues}
    //   validationSchma={validationSchma}
    //   onSubmit={onSubmit}
    // >
    //   {(formik) => {
    //     return (
    //       <Form>
    //         <FormikControl
    //           control='input'
    //           type='email'
    //           label='Email'
    //           name='email'
    //         />
    //         <FormikControl
    //           control='input'
    //           type='password'
    //           label='Password'
    //           name='password'
    //         />
    //         <button
    //           type='submit'
    //           disabled={!formik.isValid}
    //           className='btn btn-primary'
    //         >
    //           Login
    //         </button>
    //       </Form>
    //     );
    //   }}
    // </Formik>
  );
}

export default Login;
