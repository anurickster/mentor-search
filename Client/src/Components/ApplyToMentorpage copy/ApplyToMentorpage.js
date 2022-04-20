import React from 'react';
import './module.ApplyToMentorpage.css';
import Navigationbar from '../Navigationbar/Navigationbar';
import Footer from '../Footerpage/Footer';
import sampleImage from './ApplytoMentorpage.jpg';

const ApplyToMentorpage = () => {
  return (
    <>
      <Navigationbar />
      <div className='main-profile'>
        <h1>Hi Jayesh</h1>
        <h3># Things to keep in Mind</h3>
        <ul>
          <li>Pull The code</li>
          <li>you have to make a page for Apply to Mentor in this file</li>
          <li>
            for styling use{' '}
            <b>./Components/ApplyToMentorpage/moudule.ApplyToMentorpage.css</b>
          </li>
          <li>
            this page is for student role when student come he/she can apply by
            filling details as per the requirement
          </li>
        </ul>
        <p className='example-of-usage'>
          if you are facing any issues please let me assist you.
        </p>
        <br />
        <br />
        <h4>Please See Reffrence below</h4>
        <br />
        <img src={sampleImage} alt='sample' title='Sample Image' />
      </div>
      <Footer />
    </>
  );
};

export default ApplyToMentorpage;
