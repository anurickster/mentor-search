import React from 'react';
import './moudule.MentorProfilepage.css';
import Navigationbar from './../../Components/Navigationbar/Navigationbar';
import Footer from './../../Components/Footerpage/Footer';
import { useNavigate } from 'react-router-dom';

const MentorProfilepage = () => {
  const navigate = useNavigate();
  const applyToMentor = () => {
    navigate('/applytomentor');
  };
  return (
    <>
      <Navigationbar />
      <div className='main-profile'>
        <h1>Hi Mohit</h1>
        <h3># Things to keep in Mind</h3>
        <ul>
          <li>Pull The code</li>
          <li>you have to make a page for Mentor Profile in this file</li>
          <li>
            for styling use{' '}
            <b>./Components/MentorProfilepage/moudule.MentorProfilepage.css</b>
          </li>
          <li>
            this page is for student role when student come he will see the
            mentor profile
          </li>
          <li>in the end: Mujhe Tum pe Naaz hai...</li>
        </ul>
        <p className='example-of-usage'>
          if you are facing any issues please let me assist you.
        </p>
      </div>
      <button className='btn btn-primary' onClick={applyToMentor}>
        Apply to Mentor
      </button>
      <Footer />
    </>
  );
};

export default MentorProfilepage;
