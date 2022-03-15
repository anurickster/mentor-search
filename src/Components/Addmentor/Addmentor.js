import axios from 'axios';
import React, { useState } from 'react';
import Navigationbar from '../Navigationbar/Navigationbar';
import './module.Addmentor.css';

const Addmentor = () => {
  const onAddMentor = () => {
    axios.post('http://localhost:9000/posts', {
      mentorName: mName,
      imgUrl: 'https://miro.medium.com/max/895/0*l0QEGkMny8Ifq5pQ.png',
      yearExperience: mYrExp,
      monthExperience: mMnExp,
      mentorSkills: ['C++', 'C', 'Node.js', 'React.js'],
    });
  };

  const [mName, setMName] = useState('');
  const [mYrExp, setMYrExp] = useState('');
  const [mMnExp, setMMnExp] = useState('');
  const [mImgUrl, setMImgUrl] = useState([]);

  return (
    <>
      <Navigationbar />
      <form className='form-container' action='null'>
        <label htmlFor='mentorName' name='mentorName'>
          Enter Name
        </label>
        <input type='text' onChange={(e) => setMName(e.target.value)} />
        <label htmlFor='mentorName' name='mentorName'>
          Enter Experience in years
        </label>
        <input type='text' onChange={(e) => setMYrExp(e.target.value)} />
        <label htmlFor='mentorName' name='mentorName'>
          Enter Experience in months
        </label>
        <input type='text' onChange={(e) => setMMnExp(e.target.value)} />
        <label htmlFor='imageUrl'>Enter Image URL</label>
        <input type='text' onChange={(e) => setMImgUrl(e.target.value)} />
        <button type='button' onClick={onAddMentor} className='btn btn-primary'>
          Add Mentor
        </button>
      </form>
    </>
  );
};

export default Addmentor;
