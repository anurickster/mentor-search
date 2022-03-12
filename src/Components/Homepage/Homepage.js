import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import './module.Homepage.css';

const Homepage = () => {
  const [mentorCard, setMentorCard] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/posts').then((response) => {
      setMentorCard(response.data);
    });
  }, []);

  const mentorPosts = mentorCard.map((mentorEl, index) => (
    <Card key={'mentor' + mentorEl.id} >
      <Card.Img variant='top' src={mentorEl.imgUrl} />
      <Card.Body>
        <Card.Title>{mentorEl.mentorName}</Card.Title>
        <Card.Text>
          {mentorEl.yearExperience === 0 && mentorEl.monthExperience === 0
            ? 'Experience: Fresh Volunteer'
            : `Experience: ${mentorEl.yearExperience} Years ${mentorEl.monthExperience} months`}
          <br />
          {`Skillset:  ${mentorEl.mentorSkills}`}
        </Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  ));

  return <div className='Post-container'>{mentorPosts}</div>;
};

export default Homepage;
