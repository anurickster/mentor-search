import React, { useEffect, useState } from "react";
import Navigationbar from "../Navigationbar/Navigationbar";
import "./module.Mentor.css";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/post-reducer";
import Footer from "../Footerpage/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

const Mentor = () => {
  const [mentorName, setMentorName] = useState("");
  const [yearExperience, setYearExperience] = useState(null);
  const [monthExperience, setMonthExperience] = useState(null);
  const [imgUrl] = useState(
    "https://miro.medium.com/max/895/0*l0QEGkMny8Ifq5pQ.png"
  );
  const [mentorSkills] = useState(["React", "Node"]);

  const dispatch = useDispatch();

  const { id } = useParams();
  console.log(id);

  useEffect(async () => {
    if (id) {
      getMentorEdit();
    }
  }, []);

  const getMentorEdit = async () => {
    const result = await axios.get(`http://localhost:9000/mentors/${id}`);
    console.log(result.data);
    setMentorName(result.data.mentorName);
    setYearExperience(result.data.yearExperience);
    setMonthExperience(result.data.monthExperience);
  };

  return (
    <>
      <Navigationbar />
      <div className="form-main">
        <form className="form-container">
          <label htmlFor="mentorName" name="mentorName">
            Enter Name
          </label>
          <input
            id="mName"
            type="text"
            className="form-control form-control-lg"
            value={mentorName}
            onChange={(e) => setMentorName(e.target.value)}
            required
          />
          <label htmlFor="mentorName" name="mentorName">
            Enter Experience in years
          </label>
          <input
            id="mYrExp"
            type="number"
            className="form-control form-control-lg"
            value={yearExperience}
            onChange={(e) => setYearExperience(Number(e.target.value))}
            required
          />
          <label htmlFor="mentorName" name="mentorName">
            Enter Experience in months
          </label>
          <input
            id="mMnExp"
            className="form-control form-control-lg"
            type="number"
            value={monthExperience}
            onChange={(e) => setMonthExperience(Number(e.target.value))}
            required
          />
          <label htmlFor="imageUrl">Enter Image URL</label>
          <input
            id="mImgUrl"
            type="text"
            className="form-control form-control-lg"
            // onChange={(e) => setMImgUrl(e.target.value)}
          />
          <center>
            <button
              type="submit"
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
              // onClick={id ? (e) => updateMentor(id, men) : (e) => addmentor(men)}@anurickster
              className="btn btn-primary"
            >
              {id ? "Update Mentor" : "Add Mentor"}
            </button>
          </center>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Mentor;
