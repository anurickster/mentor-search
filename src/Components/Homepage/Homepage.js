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

  const mentors = filterdmentors.map((mentorEl) => (
    <Card className='card-element' key={'mentor' + mentorEl.id}>
      <Card.Img
        variant='top'
        src={`https://randomuser.me/api/portraits/men/${mentorEl.id}.jpg`}
        alt='mentor-profile'
      />
      <Card.Body>
        <Card.Title>{mentorEl.mentorName}</Card.Title>
        <Card.Text>
          <span>Experience: </span>
          {mentorEl.yearExperience === 0 && mentorEl.monthExperience === 0
            ? 'Fresher Volunteer'
            : `${mentorEl.yearExperience} Years ${mentorEl.monthExperience}months`}
          <br />
          <span>Skills:</span> {mentorEl.mentorSkills.join(', ')}
        </Card.Text>
      </Card.Body>
    </Card>
  ));

  return (
    <>
      <Navigationbar />
      <div className='search'>
        <input
          className='search-panel'
          type='text'
          placeholder='Serach Mentor'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <hr />
      <div className='Post-container'>{mentors}</div>
    </>
  );
};

export default Homepage;
