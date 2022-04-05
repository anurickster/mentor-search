import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './module.Homepage.css';
import Navigationbar from '../Navigationbar/Navigationbar';
import { fetchPosts, deletePost } from '../../store/post-reducer';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../Footerpage/Footer';

const Homepage = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [deleteHandle, setDeleteHandle] = useState(false);

  const mentorCard = useSelector((state) => {
    return state.posts;
  });

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch, deleteHandle]);

  const handleDelete = (id) => {
    const isDelete = window.confirm('Are you sure you want to delete?');
    if (isDelete) {
      console.log(isDelete);
      dispatch(deletePost(id));
      setDeleteHandle(!deleteHandle);
    }
  };

  const filterdmentors = mentorCard.filter((mentorEl) =>
    mentorEl.mentorName.toLowerCase().includes(search.toLowerCase())
  );

  const mentors = filterdmentors.map((mentorEl, index) => (
    <Card className='card-element' key={'mentor222' + mentorEl._id}>
      <Card.Img
        variant='top'
        src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`}
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
          <br />
          <Link
            as
            button
            className='btn btn-primary'
            to={`/addmentor/${mentorEl._id}`}
          >
            Edit
          </Link>
          &nbsp;&nbsp;&nbsp;
          <button
            className='btn btn-danger'
            onClick={() => handleDelete(mentorEl._id)}
          >
            Delete
          </button>
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
      <Footer />
    </>
  );
};

export default Homepage;
