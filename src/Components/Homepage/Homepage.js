import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import './module.Homepage.css';
import Navigationbar from '../Navigationbar/Navigationbar';
import { fetchPosts } from '../../store/post-reducer';
import { useSelector, useDispatch } from 'react-redux';


const Homepage = () => {
  const mentorCard = useSelector((state) => {
    console.log(state);
    return state.posts;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const mentorPosts = mentorCard.map((mentorEl, index) => (
    <Card key={'mentor' + mentorEl.id}>
      <Card.Img variant='top' src={mentorEl.imgUrl} />
      <Card.Body>
        <Card.Title>{mentorEl.mentorName}</Card.Title>
        <Card.Text>
          {mentorEl.yearExperience === 0 && mentorEl.monthExperience === 0
            ? 'Experience: Fresh Volunteer'
            : `Experience: ${mentorEl.yearExperience} Years ${mentorEl.monthExperience} months`}
          <br />
          {`Skillset:  ${mentorEl.mentorSkills.join(', ')}`}
        </Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  ));

  return (
    <>
      <Navigationbar />
      <div className='Post-container'>{mentorPosts}</div>
      
    </>
  );
};

export default Homepage;
