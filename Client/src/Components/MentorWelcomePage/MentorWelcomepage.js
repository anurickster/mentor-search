import React, { useState, useEffect } from 'react';
import './module.MentorWelcomepage.css';
import Navigationbar from '../Navigationbar/Navigationbar';
import Footer from '../Footerpage/Footer';

const MentorWelcomepage = () => {
  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch('/getdata', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      // console.log(data);
      setUserName(data.name);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userHomePage();
  }, []);

  return (
    <>
      <Navigationbar />
      <div className='home-page'>
        <div className='home-div'>
          <p className='pt-5'>WELCOME</p>
          <h1>{userName}</h1>
          <h2>
            {' '}
            {show ? 'Happy, to see you back' : 'We are team of FindMentor.com'}
          </h2>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MentorWelcomepage;
