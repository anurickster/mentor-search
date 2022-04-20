import React, { useEffect, useState } from "react";
import "./module.CourseDetailspage.css";
import Navigationbar from "../Navigationbar/Navigationbar";
import Footer from "../Footerpage/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";

const CourseDetailspage = () => {
  const [course, setCourse] = useState({});

  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:9000/courses/${id}`).then((res) => {
      console.log(res.data);
      setCourse(res.data);
    });
  }, []);
  // console.log(course);
  // console.log(course.level);

  return (
    <>
      <Navigationbar />
      <div className="Course_details_container">
        <div className="Course_details_container_left">
          <div className="course_Heading">
            <h1>{course.course_title}</h1>
            <Rating
              className="Rating"
              name="half-rating"
              value={Math.ceil(Math.random() * 5)}
              precision={0.2}
              size="large"
              color="secondary"
              controlled="true"
            />
          </div>
          <div>{course.lectures} </div>
          <div>{course.course_duration}</div>
          {/* <div>{course.students} students enrolled already</div> */}
          <div className="no_of_students">
            {Math.ceil(Math.random() * 2000)} students enrolled already
          </div>
          <div>{course.discription}</div>
          <ul>
            {course.level
              ? course.level.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })
              : ""}
          </ul>
          <h3>What you will learn</h3>
          <div className="course_content_container">
            <p> {course.course_duration} Hours of Videos</p>
            <p> {course.lectures} Lectures</p>
            <p> And Assignments on each topic</p>

            <ul>
              {course.course_content
                ? course.course_content.map((item, i) => {
                    return <li key={i}>{item}</li>;
                  })
                : ""}
            </ul>
          </div>
        </div>
        <div className="Course_details_container_right">
          <div className="Course_details_container_right_Img">
            <img src={course.image} alt="" />
          </div>
          <div className="Course_details_container_right_details"></div>
        </div>
      </div>

      {/* <div className="main-profile">
        <h1>Hi Mohit</h1>
        <h3># Things to keep in Mind</h3>
        <ul>
          <li>Pull The code</li>
          <li>you have to make a page for Course Details in this file</li>
          <li>
            for styling use{" "}
            <b>./Components/CourseDetailspage/moudule.CourseDetailspage.css</b>
          </li>
          <li>
            this page is for student role when student come he/she can apply by
            filling details as per the requirement
          </li>
        </ul>
        <p className="example-of-usage">
          if you are facing any issues please let me assist you.
        </p>
      </div> */}

      <Footer />
    </>
  );
};

export default CourseDetailspage;
