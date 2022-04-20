import React from 'react';
import { useEffect } from 'react';

import './module.ViewCoursespage.css';
import axios from 'axios';
import Img1 from '../Images/1.jpg';
import Img2 from '../Images/2.jpg';
import Img3 from '../Images/3.jpg';
import Img4 from '../Images/4.jpg';
import Img5 from '../Images/5.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

const ViewCoursespage = () => {
  const [mentors, setMentors] = React.useState(['']);
  const [coursesList, setCoursesList] = React.useState(['']);
  const ImgArray = [Img1, Img2, Img3, Img4, Img5];
  const [moreOptions, setMoreOptions] = React.useState(0); //for more options
  const [usertype, setUsertype] = React.useState('');
  const [userId, setUserId] = React.useState('');

  useEffect(() => {
    axios
      .get('http://localhost:9000/courses')
      .then((res) => {
        console.log(res.data);
        setCoursesList(res.data);
        console.log(coursesList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [mentors.length]);

  const ShowMoreOptions = (event, id) => {
    event.preventDefault();
    if (moreOptions === id) {
      setMoreOptions(null);
    } else {
      setMoreOptions(id);
    }
  };

  const DeleteMentor = async (event, id) => {
    event.preventDefault();
    await axios.delete(`http://localhost:7000/mentors/${id}`);

    setMentors(mentors.filter((mentor) => mentor.id !== id));
  };
  // console.log(userId);

  const viewMentorDetails = (event, id) => {
    event.preventDefault();
    window.location.href = `/mentorprofile/`;
    // window.location.href = `/mentorprofile/${id}`;
  };
  const viewCourseDetails = (event, id) => {
    event.preventDefault();
    console.log(id);
    window.location.href = `/coursedetails/${id}`;
    // window.location.href = `/courseprofile/${id}`;
  };

  return (
    <>
      <div className='Home'>
        <div className='Courses_Container'>
          {coursesList ? (
            coursesList.map((course, i) => {
              // console.log(mentor.id);
              return (
                <div key={i} className='CourseCard'>
                  <div className='TopSection'>
                    <img
                      className='Course__Image'
                      src={ImgArray[Math.floor(Math.random() * 5)]}
                      alt='mentorCourse'
                    />
                    <p className='Course_Title'> {course.course_title}</p>
                    {/* <p> {course.lectures} sessions</p> */}
                    <span onBlur={() => setMoreOptions(null)}>
                      {course.linkedin ? (
                        <a
                          href={course.linkedin}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <LinkedInIcon className='Linkedin__Icon' />
                        </a>
                      ) : null}
                      {course.github ? (
                        <a
                          href={course.github}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <GitHubIcon className='Github__Icon' />
                        </a>
                      ) : null}
                      {usertype === 'mentor' && userId == course.id ? (
                        <>
                          <MoreVertIcon
                            className='More__Icon'
                            onClick={(e) => ShowMoreOptions(e, course.id)}
                          />
                          <ul
                            className={
                              moreOptions === course.id
                                ? 'Show MoreOptions'
                                : 'MoreOptions'
                            }
                          >
                            <Link to={`/mentor/${course.id}`} exact='true'>
                              <li>Edit</li>
                            </Link>
                            <li onClick={(e) => DeleteMentor(e, course.id)}>
                              Delete
                            </li>
                          </ul>
                        </>
                      ) : null}
                    </span>
                    <div className='Course__Rating'>
                      <Rating
                        className='Rating'
                        name='half-rating'
                        value={Math.ceil(Math.random() * 5)}
                        precision={0.2}
                        size='small'
                        color='secondary'
                        controlled='false'
                      />
                      <p>{} </p>
                    </div>

                    {/* <p> Discription : {course.discription} Years</p> */}
                    <p className='By_Mentor'>
                      By :
                      <a
                        className='viewMentorDetails'
                        onClick={(e) => viewMentorDetails(e, course.mentor)}
                      >
                        {course.mentor_name}
                      </a>
                    </p>

                    {/* <p>Contents</p>
                    <ul className="mentorskills">
                      {course.course_content
                        ? course.course_content.map((content, id) => {
                            return (
                              <li key={id} className="skills">
                                {content}
                              </li>
                            );
                          })
                        : null}
                    </ul> */}
                  </div>
                  <div className='BottomSection'>
                    {/* <img
                      src={ImgArray[Math.floor(Math.random() * 5)]}
                      alt="mentorCourse"
                    /> */}
                    <p className='Course_Duration'>
                      <span>Duration : {course.course_duration} hours</span>
                      &nbsp;&nbsp;
                      <span>{course.lectures} lectures</span>
                    </p>
                    <ul className='levels'>
                      {course.level
                        ? course.level.map((level, id) => {
                            return (
                              <li key={id} className='skills'>
                                {level}
                              </li>
                            );
                          })
                        : null}
                    </ul>{' '}
                    <p>Price : &#8377;{course.price}</p>
                    <button
                      className='BTN ViewDetails'
                      onClick={(e) => viewCourseDetails(e, course._id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <h3>No Mentors Present add some </h3>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewCoursespage;
