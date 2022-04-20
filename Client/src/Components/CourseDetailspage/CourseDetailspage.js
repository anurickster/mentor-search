import React from 'react';
import './module.CourseDetailspage.css';
import Navigationbar from '../Navigationbar/Navigationbar';
import Footer from '../Footerpage/Footer';

const CourseDetailspage = () => {
  return (
    <>
      <Navigationbar />
      <div className='main-profile'>
        <h1>Hi Mohit</h1>
        <h3># Things to keep in Mind</h3>
        <ul>
          <li>Pull The code</li>
          <li>you have to make a page for Course Details in this file</li>
          <li>
            for styling use{' '}
            <b>./Components/CourseDetailspage/moudule.CourseDetailspage.css</b>
          </li>
          <li>
            this page is for student role when student come he/she can apply by
            filling details as per the requirement
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

export default CourseDetailspage;
