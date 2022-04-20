import React, { useEffect, useState } from 'react';
import './module.Mentor.css';
import { useDispatch } from 'react-redux';
import { addPost, updatePost } from '../../store/post-reducer';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const Mentor = () => {
  const { id } = useParams();

  const [mentorId, setMentorId] = useState('');
  const [mentorName, setMentorName] = useState('');
  const [yearExperience, setYearExperience] = useState('');
  const [monthExperience, setMonthExperience] = useState('');
  const [imgUrl, setImgUrl] = useState(
    'https://miro.medium.com/max/895/0*l0QEGkMny8Ifq5pQ.png'
  );
  const [mentorSkills, setMentorSkills] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const getMentorEdit = async () => {
      const result = await axios.get(`http://localhost:9000/mentors/${id}`);
      setMentorId(result.data._id);
      setMentorName(result.data.mentorName);
      setYearExperience(result.data.yearExperience);
      setMonthExperience(result.data.monthExperience);
      setImgUrl(result.data.imgUrl);
      setMentorSkills(result.data.mentorSkills);
    };

    if (id) {
      getMentorEdit();
    }
  }, [id]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const addMentor = (e) => {
    e.preventDefault();
    dispatch(
      addPost({
        mentorName,
        yearExperience,
        monthExperience,
        imgUrl,
        mentorSkills,
      })
    );
    setMentorName('');
    setYearExperience('');
    setMonthExperience('');
    setMentorSkills('');
    setImgUrl('');
    toast('Mentor Added Successfully', { type: 'success' });
  };

  const updateMentor = (e) => {
    e.preventDefault();
    if (isUpdated) {
      toast(<h4>{mentorName} Updated Successfully</h4>, { type: 'success' });
      dispatch(
        updatePost(mentorId, {
          mentorName,
          yearExperience,
          monthExperience,
          imgUrl,
          mentorSkills,
        })
      );
    }
    navigate('/homepage');
  };

  return (
    <>
      <div className='form-main'>
        <form
          className='form-container'
          onSubmit={(e) => {
            id ? updateMentor(e) : addMentor(e);
          }}
        >
          <label htmlFor='mentorName' name='mentorName'>
            Enter Name
          </label>
          <input
            id='mName'
            placeholder='Your Name'
            type='text'
            className='form-control form-control-lg'
            value={mentorName}
            onChange={(e) => {
              setMentorName(e.target.value);
              setIsUpdated(true);
            }}
            required
          />
          <label htmlFor='mentorName' name='mentorName'>
            Enter Experience in years
          </label>
          <input
            placeholder='How many years of experience'
            id='mYrExp'
            type='number'
            className='form-control form-control-lg'
            value={yearExperience}
            onChange={(e) => {
              setYearExperience(Number(e.target.value));
              setIsUpdated(true);
            }}
            required
          />
          <label htmlFor='mMnExp' name='mMnExp'>
            Enter Experience in months
          </label>
          <input
            id='mMnExp'
            placeholder='How many months of experience'
            className='form-control form-control-lg'
            type='number'
            value={monthExperience}
            onChange={(e) => {
              setMonthExperience(Number(e.target.value));
              setIsUpdated(true);
            }}
            required
          />
          <label htmlFor='imageUrl'>Enter Image URL</label>
          <input
            id='mImgUrl'
            placeholder='Paste image URL if you have'
            value={imgUrl}
            type='text'
            className='form-control form-control-lg'
            onChange={(e) => {
              setImgUrl(e.target.value);
              setIsUpdated(true);
            }}
          />
          <label htmlFor='mSkills'>Skills to be shown</label>
          <input
            id='mSkills'
            type='text'
            value={mentorSkills}
            placeholder='use "," to separate skills'
            className='form-control form-control-lg'
            onChange={(e) => {
              setMentorSkills(e.target.value.split(','));
              setIsUpdated(true);
            }}
          />
          <center>
            <button type='submit' className='btn btn-primary'>
              {id ? 'Update Mentor' : 'Add Mentor'}
            </button>
          </center>
        </form>
      </div>
    </>
  );
};

export default Mentor;
