import React, { useState } from 'react';
import Navigationbar from '../Navigationbar/Navigationbar';

const Contact = () => {
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: '',
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`${data.fullname}`);
  };
  return (
    <>
      <Navigationbar />
      <h2 className='text-center'>Contact Us</h2>
      <div className='col-md-6 col-10 mx-auto'>
        <form onSubmit={formSubmit}>
          <div>
            <label for='exampleFormControlInput1' className='form-label'>
              Full Name
            </label>
            <input
              type='text'
              className='form-control'
              id='exampleFormControlInput1'
              name='fullname'
              value={data.fullname}
              onChange={InputEvent}
              placeholder='Enter Your Name'
            />
          </div>

          <div>
            <label for='exampleFormControlInput1' className='form-label'>
              Phone Number
            </label>
            <input
              type='number'
              className='form-control'
              id='exampleFormControlInput1'
              name='phone'
              value={data.phone}
              onChange={InputEvent}
              placeholder='Enter Your Mobile Number'
            />
          </div>

          <div className='mb-3'>
            <label for='exampleFormControlInput1' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='exampleFormControlInput1'
              name='email'
              value={data.email}
              onChange={InputEvent}
              placeholder='name@example.com'
            />
          </div>

          <div className='mb-3'>
            <label for='exampleFormControlTextarea1' className='form-label'>
              Meassage
            </label>
            <textarea
              className='form-control'
              id='exampleFormControlTextarea1'
              rows='3'
              name='msg'
              value={data.msg}
              onChange={InputEvent}
              placeholder='Enter any Query'
            ></textarea>
          </div>

          <div className='col-12'>
            <button className='btn btn-outline-primary' type='submit'>
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
