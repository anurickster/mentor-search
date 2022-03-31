import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./module.Homepage.css";
import Navigationbar from "../Navigationbar/Navigationbar";
import { fetchPosts } from "../../store/post-reducer";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Homepage = () => {
  const [search, setSearch] = useState("");
  const mentorCard = useSelector((state) => {
    console.log(state);
    return state.posts;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const filterdmentors = mentorCard.filter((mentorEl) =>
    mentorEl.mentorName.toLowerCase().includes(search.toLowerCase())
  );

  // const editMentor = (id, mentor) => {
  //   useNavigate(Navigate);
  //   Navigate = `/addmentor/${id}`;
  //   console.log("Edit this mentor", id);
  //   console.log("Edit this mentor", mentor);
  // };
  const deleteMentor = async (id) => {
    console.log("Delete this mentor", id);
    await axios.delete(`http://localhost:9000/mentors/${id}`);
    // redux code to remove object by id @anurickster
  };

  const mentors = filterdmentors.map((mentorEl, index) => (
    <Card className="card-element" key={"mentor" + mentorEl.id}>
      <Card.Img
        variant="top"
        src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`}
        alt="mentor-profile"
      />
      <Card.Body>
        <Card.Title>{mentorEl.mentorName}</Card.Title>
        <Card.Text>
          <span>Experience: </span>
          {mentorEl.yearExperience === 0 && mentorEl.monthExperience === 0
            ? "Fresher Volunteer"
            : `${mentorEl.yearExperience} Years ${mentorEl.monthExperience}months`}
          <br />
          <span>Skills:</span> {mentorEl.mentorSkills.join(", ")}
          <br />
          <button className="btn btn-primary">
            <Link to={`/addmentor/${mentorEl._id}`}>Edit</Link>
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteMentor(mentorEl._id)}
          >
            {" "}
            delete
          </button>
        </Card.Text>
      </Card.Body>
    </Card>
  ));

  return (
    <>
      <Navigationbar />
      <div className="search">
        <input
          className="search-panel"
          type="text"
          placeholder="Serach Mentor"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <hr />
      <div className="Post-container">{mentors}</div>
    </>
  );
};

export default Homepage;
