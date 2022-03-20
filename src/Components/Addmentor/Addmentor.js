import React, { useState } from "react";
import Navigationbar from "../Navigationbar/Navigationbar";
import "./module.Addmentor.css";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/post-reducer";
import Footer from "../Footerpage/Footer";

const Addmentor = () => {
  const [mentorName, setMentorName] = useState("");
  const [yearExperience, setYearExperience] = useState(0);
  const [monthExperience, setMonthExperience] = useState(0);
  const [imgUrl] = useState(
    "https://miro.medium.com/max/895/0*l0QEGkMny8Ifq5pQ.png"
  );
  const [mentorSkills] = useState(["React", "Node"]);

  const dispatch = useDispatch();

  return (
    <>
      <Navigationbar />
      <div className='form-main'>
        <form className='form-container'>
          <label htmlFor='mentorName' name='mentorName'>
            Enter Name
          </label>
          <input
            id='mName'
            type='text'
            className='form-control form-control-lg'
            onChange={(e) => setMentorName(e.target.value)}
            required
          />
          <label htmlFor='mentorName' name='mentorName'>
            Enter Experience in years
          </label>
          <input
            id='mYrExp'
            type='number'
            className='form-control form-control-lg'
            onChange={(e) => setYearExperience(Number(e.target.value))}
            required
          />
          <label htmlFor='mentorName' name='mentorName'>
            Enter Experience in months
          </label>
          <input
            id='mMnExp'
            className='form-control form-control-lg'
            type='number'
            onChange={(e) => setMonthExperience(Number(e.target.value))}
            required
          />
          <label htmlFor='imageUrl'>Enter Image URL</label>
          <input
            id='mImgUrl'
            type='text'
            className='form-control form-control-lg'
            // onChange={(e) => setMImgUrl(e.target.value)}
          />
          <center>
            <button
              onClick={() =>
                dispatch(
                  addPost({
                    mentorName,
                    yearExperience,
                    monthExperience,
                    imgUrl,
                    mentorSkills,
                  })
                )
              }
              className='btn btn-primary'
            >
              Add Mentor
            </button>
          </center>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Addmentor;
