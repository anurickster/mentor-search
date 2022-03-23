import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './module.Homepage.css';
import Navigationbar from '../Navigationbar/Navigationbar';
import { fetchPosts } from '../../store/post-reducer';
import { useSelector, useDispatch } from 'react-redux';

const Homepage = () => {
  const [search, setSearch] = useState('');
  const mentorCard = useSelector((state) => {
    console.log(state);
    return state.posts;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const filterdmentors = mentorCard.filter((mentorEl) =>
    mentorEl.mentorName.toLowerCase().includes(search.toLowerCase())
  );

  // const mentorPosts = filterdmentors.map((mentorEl, index) => (
  //   <Card key={'mentor' + mentorEl.id}>
  //     <Card.Img variant='top' src={mentorEl.imgUrl} />
  //     <Card.Body>
  //       <Card.Title>{mentorEl.mentorName}</Card.Title>
  //       <Card.Text>
  //         {mentorEl.yearExperience === 0 && mentorEl.monthExperience === 0
  //           ? `Experience: Fresh Volunteer`
  //           : `Experience: ${mentorEl.yearExperience} Years ${mentorEl.monthExperience} months`}
  //         <br />
  //         <span>Skillset:</span> {mentorEl.mentorSkills.join(', ')}
  //       </Card.Text>
  //     </Card.Body>
  //   </Card>
  // ));

  const mentors = filterdmentors.map((item) => (
    <div key={'mentor' + item.id}>
      <img
        src={`https://randomuser.me/api/portraits/men/${item.id}.jpg`}
        alt='image'
      />
      <Card.Body>
        <Card.Title>{item.mentorName}</Card.Title>
        <Card.Text>
          <span>Experience</span>
          {item.yearExperience === 0 && item.monthExperience === 0
            ? 'Fresher Volunteer'
            : `${item.yearExperience} Years ${item.monthExperience}months`}
          <br />
          <span>Skills:</span> {item.mentorSkills.join(', ')}
        </Card.Text>
      </Card.Body>
    </div>
  ));

  return (
    <>
      <Navigationbar />
<<<<<<< HEAD
      <div className='Post-container'>{mentorPosts}</div>
=======
      <div className='search'>
        <input
          className='input'
          type='text'
          placeholder='serach mentor'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <hr />
      </div>
      <div className='Post-container'>{mentors}</div>
>>>>>>> fe0fb3d1b9942232a25ada9b16df29895db90365
    </>
  );
};

export default Homepage;
