import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

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
