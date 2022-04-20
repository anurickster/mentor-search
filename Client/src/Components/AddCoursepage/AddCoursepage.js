import React from "react";
import Navigationbar from "../Navigationbar/Navigationbar";
import Footer from "../Footerpage/Footer";
import { useEffect } from "react";
import axios from "axios";
import Learning from "./Learning.png";
import { useNavigate, useParams } from "react-router-dom";
import MultipleInput from "./MultipleInput";
import "./module.AddCoursepage.css";

const AddCoursepage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [mentorsDetails, setMentorsDetails] = React.useState({
    id: localStorage.getItem("userid"),
    mname: "",
    experience: "",
    skills: [],
    courses: [],
    linkedin: "",
    github: "",
  });
  console.log(mentorsDetails);

  const [addedskills, setAddedSkills] = React.useState([]);
  console.log(addedskills);
  const [addedCourses, setAddedCourses] = React.useState([]);

  useEffect(() => {
    if (id) {
      loadMentor();
      addedskills.push(...mentorsDetails.skills);
      setAddedSkills(mentorsDetails.skills);
      setMentorsDetails({ mname: localStorage.getItem("userName") });
    }
  }, []);
  console.log(mentorsDetails.mname);
  console.log(addedskills);

  const changeHandler = (e) => {
    setMentorsDetails({ ...mentorsDetails, [e.target.name]: e.target.value });
  };

  const loadMentor = async () => {
    const result = await axios.get(`http://localhost:9000/mentors/${id}`);
    console.log(result.data);
    setMentorsDetails(result.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    return (
      mentorsDetails.skills.push(...addedskills),
      mentorsDetails.courses.push(...addedCourses),
      await axios
        .post("http://localhost:9000/mentors", mentorsDetails)

        .then((res) => {
          console.log(res.data);
          if (res.status === 200) navigate("/home");
        })
        .catch((err) => {
          console.log(err);
        })
    );
  };

  const updateMentor = async (index, e) => {
    e.preventDefault();
    return (
      mentorsDetails.skills.push(...addedskills),
      mentorsDetails.courses.push(...addedCourses),
      await axios
        .put(`http://localhost:9000/mentors/${index}`, mentorsDetails)
        .then((res) => {
          console.log(res.data);
          if (res.status === 200) navigate("/home");
          id = null;
        })
        .catch((err) => {
          console.log(err);
        })
    );
  };

  return (
    <>
      <Navigationbar />

      <div className="Services">
        <div>
          <img src={Learning} alt="Learning" className="MentorFormImage" />
        </div>
        <div>
          <form className="Mentor_Form">
            <h2 className="mt-5">
              Join Us for creating a better   <br></br> Learning Experience.
            </h2>
            <div >
              <label htmlFor="mname"></label>
              <input
                type="text"
                name="mname"
                placeholder="Mentor Name"
                value={mentorsDetails.mname || ""}
                onChange={changeHandler}
              />
            </div>
            <label htmlFor="experience"></label>
            <div className="mt-2 mb-2">
              <input
                type="number"
                name="experience"
                placeholder="Experience"
                value={mentorsDetails.experience || ""}
                onChange={changeHandler}
              />
            </div>
            <MultipleInput
              Array={addedskills}
              SetArray={setAddedSkills}
              placeholder={"Add Skills"}
              className="mt-2"
            />
            <MultipleInput
              Array={addedCourses}
              SetArray={setAddedCourses}
              placeholder={"Add Courses"}
            />
            <label htmlFor="linkdin"></label>
            <div>
              <input
                type="text"
                name="linkedin"
                placeholder="Linkedin profile link"
                value={mentorsDetails.linkedin || ""}
                onChange={changeHandler}
              />
            </div>
            <label htmlFor="github"></label>
            <div className="mt-2 mb-1">
              <input
                type="text"
                name="github"
                placeholder="Github profile Link"
                value={mentorsDetails.github || ""}
                onChange={changeHandler}
              />
            </div>

            <button
              className="Submit BTN "
              onClick={id ? (e) => updateMentor(id, e) : (e) => handleSubmit(e)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddCoursepage;
