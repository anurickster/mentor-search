import React from 'react';
import './module.MentorSelfProfilepage.css';
import Navigationbar from '../Navigationbar/Navigationbar';
import Footer from '../Footerpage/Footer';

const MentorSelfProfilepage = () => {
  return (
    <>
      <Navigationbar />
      <div className='main-profile'>
        <h1>Hi Ashwini</h1>
        <h3># Things to keep in Mind</h3>
        <ul>
          <li>Pull The code</li>
          <li>you have to make a page for Mentor Profile in this file</li>
          <li>
            for styling use{' '}
            <b>
              ./Components/MentorSelfProfilepage/moudule.MentorSelfProfilepage.css
            </b>
          </li>
          <li>
            this page is for Mentor role when he/she come to this page will
            display about his profile
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

export default MentorSelfProfilepage;
