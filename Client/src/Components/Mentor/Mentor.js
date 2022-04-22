import React, { useEffect, useState } from 'react';
import './module.Mentor.css';
import { useDispatch } from 'react-redux';
import { addPost, updatePost } from '../../store/post-reducer';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigationbar from '../Navigationbar/Navigationbar';
toast.configure();

const Mentor = () => {
  const { id } = useParams();

  const [mentorId, setMentorId] = useState('');
  const [mentorName, setMentorName] = useState('');
  const [technologies,setTechnologies]=useState('');
  const [yearExperience, setYearExperience] = useState('');
  const [monthExperience, setMonthExperience] = useState('');
  const [imgUrl, setImgUrl] = useState(
    'https://miro.medium.com/max/895/0*l0QEGkMny8Ifq5pQ.png'
  );
  const [mentorSkills, setMentorSkills] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);
  const [likendinUrl, setLikendinUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [description, setDescription] = useState('');
  //const [fees, setFees] = useState('');


  useEffect(() => {
    const getMentorEdit = async () => {
      const result = await axios.get(`http://localhost:9000/mentors/${id}`);
      setMentorId(result.data._id);
      setMentorName(result.data.mentorName);
      setTechnologies(result.data.technologies);
      setYearExperience(result.data.yearExperience);
      setMonthExperience(result.data.monthExperience);
      setMentorSkills(result.data.mentorSkills);
      //setFees(result.data.fees);
      setImgUrl(result.data.imgUrl);
      setLikendinUrl(result.data.likendinUrl);
      setGithubUrl(result.data.githubUrl);
      setDescription(result.data.desription);

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
        // mentorName,
        technologies,
        yearExperience,
        monthExperience,
        mentorSkills,
       // fees,
        imgUrl,
        likendinUrl,
        githubUrl,
        description,
      })
    );
   // setMentorName('');
    setYearExperience('');
    setMonthExperience('');
    setTechnologies('');
    setMentorSkills('');
    //setFees();
    setImgUrl('https://miro.medium.com/max/895/0*l0QEGkMny8Ifq5pQ.png');
    setLikendinUrl('');
    setGithubUrl('');
    setDescription('');
    toast('Details Posted Successfully', { type: 'success' });
    navigate('/welcomepage');
  };

  const updateMentor = (e) => {
    e.preventDefault();
    if (isUpdated) {  
      toast(<h4>{mentorName} Updated Successfully</h4>, { type: 'success' });
      dispatch(
        updatePost(mentorId, {
        //   mentorName,
          technologies,
          yearExperience,
          monthExperience,
          imgUrl,
          mentorSkills,
            //fees,
            likendinUrl,
            githubUrl,
            description,
        })
      );
    } 
  };

  return (
    <>
      <Navigationbar />
      <div className='form-main'>
        <form
          className='form-container'
          onSubmit={(e) => {
            id ? updateMentor(e) : addMentor(e);
          }}
        >
          {/* <label htmlFor='mentorName' name='mentorName'>
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
          /> */}
            <label htmlFor='technologies' name='technologies'>
                Technologies*
            </label>
            <input
                id='technologies'
                placeholder='Enter Technologies you are good at'
                type='text'
                className='form-control form-control-lg'
                value={technologies}
                onChange={(e) => {
                    setTechnologies(e.target.value);
                    setIsUpdated(true);
                }}
                required
            />
          <label htmlFor='mentorName' name='mentorName'>
            Enter Experience in years * (if fresher enter 0)
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
            Enter Experience in months* (if fresher enter 0)
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
              <label htmlFor='mSkills'>Skills to be shown*</label>
          <input
            id='mSkills'
            type='array'
            value={mentorSkills}
            placeholder='use "," to separate skills'
            className='form-control form-control-lg'
            onChange={(e) => {
              setMentorSkills(e.target.value.split(','));
              setIsUpdated(true);
            }}
            required
          />
          <label htmlFor='imageUrl'>Enter Image URL</label>
          <input
            id='mImgUrl'
            placeholder='Paste image URL if you have'
            value={imgUrl}
            type='url'
            className='form-control form-control-lg'
            onChange={(e) => {
              setImgUrl(e.target.value);
              setIsUpdated(true);
            }}
          />
           {/* <label htmlFor='fees'>Enter Fees</label>
            <input
                id='fees'
                placeholder='Enter fees'
                type='number'
                className='form-control form-control-lg'
                value={fees}
                onChange={(e) => {
                    setFees(Number(e.target.value));
                    setIsUpdated(true);
                }}
            /> */}
            <label htmlFor='likendinUrl'>Linkedin URL</label>
            <input
                id='likendlnUrl'
                placeholder='Paste Linkedin URL'
                value={likendinUrl}
                type='url'
                className='form-control form-control-lg'
                onChange={(e) => {
                    setLikendinUrl(e.target.value);
                    setIsUpdated(true);
                }}
            />
            <label htmlFor='githubUrl'>Enter Github URL</label>
            <input
                id='githubUrl'
                placeholder='Paste Github URL if you have'
                value={githubUrl}
                type='url'
                className='form-control form-control-lg'
                onChange={(e) => {
                    setGithubUrl(e.target.value);
                    setIsUpdated(true);
                }}
            />
            <label htmlFor='description'>Enter Description</label>
            <textarea
                id='description'
                placeholder='Enter Description'
                className='form-control form-control-lg'
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
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
