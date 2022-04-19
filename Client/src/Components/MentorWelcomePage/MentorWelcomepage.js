import React from 'react';
import './module.MentorWelcomepage.css';
import Navigationbar from '../Navigationbar/Navigationbar';
import Footer from '../Footerpage/Footer';

const MentorWelcomepage = () => {
  return (
    <>
      <Navigationbar />
      <div className='main-profile'>
        <h1>Hi Ashwini</h1>
        <h3># Things to keep in Mind</h3>
        <ul>
          <li>Pull The code</li>
          <li>you have to make a page for Welcome Mentor in this file</li>
          <li>
            for styling use{' '}
            <b>./Components/MentorWelcomepage/moudule.MentorWelcomepage.css</b>
          </li>
          <li>
            this page is for Mentor role when he/she come to the website should
            see the welcome greetings
          </li>
        </ul>
        <p className='example-of-usage'>
          if you are facing any issues please let me assist you.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default MentorWelcomepage;
