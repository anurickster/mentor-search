import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import signinpic from './Images/signup2.jpg';
import './module.Signup.css';

const Signuppage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword: '',
  });

  let name, value;

  const handleInputs = (e) => {
    //console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    if (user.password !== user.cpassword) {
      alert('Password and Confirm Password does not match');
      return;
    }

    if (
      !user.name ||
      !user.email ||
      !user.phone ||
      !user.work ||
      !user.password
    ) {
      alert('Please fill all the fields');
      return;
    }

    if (user.password.length < 6) {
      alert('Password must be atleast 6 characters long');
      return;
    }

    if (user.email.indexOf('@') === -1) {
      alert('Please enter a valid email');
      return;
    }

    if (user.phone.length !== 10) {
      alert('Please enter a valid phone number');
      return;
    }

    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch('http://localhost:9000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    console.log(data, 'data');

    if (data.error) {
      alert(data.message);
    } else {
      alert('Registered Successfully');
      navigate('/');
    }

    //  to change the data to res
    // if (data.status === 422 || !data) {
    //   window.alert(' Invalid Registration !');
    //   console.log(' Invalid Registration !');
    // } else {
    //   window.alert(' Registration Successfull !');
    //   console.log(' Successfull Registration !');
    //   navigate('/');
    // }
  };

  return (
    <div className='signup-container'>
      <section className='signup'>
        <div className='container mt-5'>
          <div className='signup-content'>
            <div className='signup-form'>
              <h2 className='form-title'>Sign up</h2>
              <form method='POST' className='register-form' id='register-form'>
                <div className='form-group'>
                  {/* <label htmlFor='name'>
                    <i className='zmdi zmdi-account material-icons-name'></i>
                  </label> */}
                  <input
                    type='text'
                    name='name'
                    id='name'
                    autoComplete='off'
                    value={user.name}
                    onChange={handleInputs}
                    placeholder='Your Name'
                  />
                </div>

                <div className='form-group'>
                  {/* <label htmlFor='email'>
                    <i className='zmdi zmdi-email material-icons-name'></i>
                  </label> */}
                  <input
                    type='email'
                    name='email'
                    id='email'
                    autoComplete='off'
                    value={user.email}
                    onChange={handleInputs}
                    placeholder='Your Email'
                  />
                </div>

                <div className='form-group'>
                  {/* <label htmlFor='phone'>
                    <i className='zmdi zmdi-phone-in-talk material-icons-name'></i>
                  </label> */}
                  <input
                    type='number'
                    name='phone'
                    id='phone'
                    autoComplete='off'
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder='Your Phone'
                  />
                </div>

                <div className='form-group'>
                  {/* <label htmlFor='work'>
                    <i className='zmdi zmdi-slideshow material-icons-name'></i>
                  </label> */}
                  <input
                    type='text'
                    name='work'
                    id='work'
                    autoComplete='off'
                    value={user.work}
                    onChange={handleInputs}
                    placeholder='Your Profession'
                  />
                </div>

                {/* <div className='form-group'>
                  <i className='zmdi zmdi-slideshow material-icons-name'></i>
                  <select onChange={handleInputs} id='work' name='work'>
                    <option value=''>Select your Profession</option>
                    <option value='Student'>Student</option>
                    <option value='Mentor'>Mentor</option>
                    <option value='Developer'>Developer</option>
                    <option value='Others'>Others</option>
                  </select>
                </div> */}

                <div className='form-group'>
                  {/* <label htmlFor='password'>
                    <i className='zmdi zmdi-lock material-icons-name'></i>
                  </label> */}
                  <input
                    type='password'
                    name='password'
                    id='password'
                    autoComplete='off'
                    value={user.password}
                    onChange={handleInputs}
                    placeholder='Your Password'
                  />
                </div>

                <div className='form-group'>
                  {/* <label htmlFor='cpassword'>
                    <i className='zmdi zmdi-lock material-icons-name'></i>
                  </label> */}
                  <input
                    type='password'
                    name='cpassword'
                    id='cpassword'
                    autoComplete='off'
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder='Confirm Your Password'
                  />
                </div>

                <div className='form-group form-button'>
                  <input
                    type='submit'
                    name='signup'
                    id='signup'
                    className='form-submit'
                    value='Register'
                    onClick={PostData}
                  />
                </div>
              </form>
            </div>

            <div className='signup-image'>
              <figure>
                <img src={signinpic} alt='registration pic' />
              </figure>
              <NavLink to='/' className='signup-image-link'>
                Already Register ?
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signuppage;
