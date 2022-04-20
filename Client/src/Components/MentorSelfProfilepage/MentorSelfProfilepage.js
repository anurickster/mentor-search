import React, { useEffect, useState } from 'react';
import './module.MentorSelfProfilepage.css';
import profilepic from './Images/profile.png';
import aboutpic from './Images/profile1.png';
// import { useHistory } from 'react-router-dom';

const MentorSelfProfilepage = () => {
  // const history = useHistory();
  const courseArray = [
    'Java',
    'Python',
    'C++',
    'C#',
    'JavaScript',
    'React',
    'Angular',
    'NodeJS',
  ];

  const dummyData = [
    {
      _id: '5f5d8f9b9b8f9b8f9b8f9b8f',
      name: 'Ashwini',
      email: 'ashwini@gmail.com',
      phone: 2736473920,
      profession: 'FS Dev',
      experience: 1,
      hourlyRate: '10$',
      courseLength: courseArray.length,
      LanguagesKnown: 'French,English',
      image: aboutpic,
      availabilty: 'Full Time',
    },
  ];

  const [userData, setUserData] = useState(dummyData);

  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: 'GET',
        headers: {
          Accept: 'appllication/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      // history.push("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div className='container emp-profile'>
        <form method='GET'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='profile-img'>
                <img
                  src={
                    userData.name === 'Emma Watson'
                      ? profilepic
                      : userData[0].image
                  }
                  alt='thapa'
                />
              </div>
            </div>

            <div className='col-md-6'>
              <div className='profile-head'>
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <p className='profile-rating mt-3 mb-5'>
                  RANKINGS: <span> 6/10 </span>
                </p>

                <ul className='nav nav-tabs' role='tablist'>
                  <li className='nav-item'>
                    <a
                      className='nav-link active'
                      id='home-tab'
                      data-toggle='tab'
                      href='#home'
                      role='tab'
                      aria-controls='home'
                      aria-selected='true'
                    >
                      About
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='nav-link'
                      id='profile-tab'
                      data-toggle='tab'
                      href='#profile'
                      role='tab'
                      aria-controls='profile'
                      aria-selected='false'
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-md-2'>
              <input
                type='submit'
                className='profile-edit-btn'
                name='btnAddMore'
                value='Edit Profile'
              />
            </div>
          </div>

          <div className='row'>
            {/* left side url  */}
            <div className='col-md-4'>
              <div className='profile-work'>
                <p> WORK LINK</p>
                <a href='https://www.youtube.com/' target='_link'>
                  Youtube
                </a>
                <br />
                <a href='https://www.instagram.com/' target='_link'>
                  Instagram
                </a>
                <br />
                <a href='https://www.youtube.com/' target='_link'>
                  Technical
                </a>
                <br />
                <a href='https://www.github.com/' target='_link'>
                  github
                </a>
                <br />
                <a href='https://www.youtube.com/' target='_link'>
                  Web Developer
                </a>
                <br />
                <a href='https://www.figma.com/' target='_link'>
                  Figma
                </a>
                <br />
                <a href='https://www.youtube.com/' target='_link'>
                  Software Engineer
                </a>
                <br />
              </div>
            </div>

            {/* right side data toogle  */}

            <div className='col-md-8 pl-5 about-info'>
              <div className='tab-content profile-tab' id='myTabContent'>
                <div
                  className='tab-pane fade show active'
                  id='home'
                  role='tabpanel'
                  aria-labelledby='home-tab'
                >
                  <div className='row'>
                    <div className='col-md-6'>
                      <div>User Id</div>
                    </div>
                    <div className='col-md-6'>
                      <p>787865454546</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <div>Name</div>
                    </div>
                    <div className='col-md-6 '>
                      <p>{userData.name}</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <div>Email</div>
                    </div>
                    <div className='col-md-6'>
                      <p>{userData.email}</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <div>Phone</div>
                    </div>
                    <div className='col-md-6'>
                      <p>{userData.phone}</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <div>Profession</div>
                    </div>
                    <div className='col-md-6'>
                      <p>Web Devloper</p>
                    </div>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='profile'
                  role='tabpanel'
                  aria-labelledby='profile-tab'
                >
                  <div className='row'>
                    <div className='col-md-6'>
                      <div>Experience</div>
                    </div>
                    <div className='col-md-6'>
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <div>Hourly Rate</div>
                    </div>
                    <div className='col-md-6'>
                      <p>10$/hr</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <div>Total Projects</div>
                    </div>
                    <div className='col-md-6'>
                      <p>230</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <div>Languages Known</div>
                    </div>
                    <div className='col-md-6'>
                      <p>English</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <div>Availability</div>
                    </div>
                    <div className='col-md-6'>
                      <p>6 months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default MentorSelfProfilepage;
