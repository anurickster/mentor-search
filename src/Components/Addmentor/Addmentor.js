import axios from 'axios';
import React from 'react';
import Navigationbar from '../Navigationbar/Navigationbar';
import './module.Addmentor.css';

const Addmentor = () => {
  const onAddMentor = () => {
    axios.post('http://localhost:9000/usrr', {
      mentorName: 'Ashwini Rathod',
      imgUrl: 'https://miro.medium.com/max/895/0*l0QEGkMny8Ifq5pQ.png',
      yearExperience: 2,
      monthExperience: 10,
      mentorSkills: ['C++', 'C', 'Node.js', 'React.js'],
    });
  };

  return (
    <>
      <Navigationbar />
      <form className='form-container' action='null'>
        <label htmlFor='mentorName' name='mentorName'>
          Enter Name
        </label>
        <input type='text' />
        <label htmlFor='mentorName' name='mentorName'>
          Enter Experience in years
        </label>
        <input type='text' />
        <label htmlFor='mentorName' name='mentorName'>
          Enter Experience in months
        </label>
        <input type='text' />
        <label htmlFor='imageUrl'>Enter Image URL</label>
        <input type='text' />
        <button type='button' onClick={onAddMentor} className='btn btn-primary'>
          Add Mentor
        </button>
      </form>
    </>
  );
};

export default Addmentor;
