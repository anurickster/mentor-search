// import React, { useEffect, useState } from 'react';
// import { Card } from 'react-bootstrap';
// import './module.Homepage.css';
// import { fetchPosts, deletePost } from '../../store/post-reducer';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import Navigationbar from '../Navigationbar/Navigationbar';

// const Homepage = () => {
//   // All Primary Hooks
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // All States hooks
//   const [search, setSearch] = useState('');
//   const [deleteHandle, setDeleteHandle] = useState(false);

//   // Selectors for Redux use
//   const mentorCard = useSelector((state) => {
//     return state.postReducer.posts;
//   });

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch, deleteHandle]);

//   // All Functions
//   const handleDelete = (id) => {
//     const isDelete = window.confirm('Are you sure you want to delete?');
//     if (isDelete) {
//       console.log(isDelete);
//       dispatch(deletePost(id));
//     }
//     setDeleteHandle(!deleteHandle);
//   };

//   const navigateTOProfile = (id) => {
//     // navigate(`/mentor-profile/${id}`); // for your reference @mohit
//     navigate(`/mentorprofile`);
//   };

//   const filterdmentors = mentorCard.filter((mentorEl) =>
//     mentorEl.mentorName.toLowerCase().includes(search.toLowerCase())
//   );

//   const mentors = filterdmentors.map((mentorEl, index) => (
//     <Card className='card-element' key={'mentor222' + mentorEl._id}>
//       <Card.Img variant='top' src={mentorEl.imgUrl} alt='mentor-profile' />
//       <Card.Body>
//         <Card.Title>{mentorEl.mentorName}</Card.Title>
//         <Card.Text>
//           <span>Experience: </span>
//           {mentorEl.yearExperience === 0 && mentorEl.monthExperience === 0
//             ? 'Fresher Volunteer'
//             : `${mentorEl.yearExperience} Years ${mentorEl.monthExperience}months`}
//           <br />
//           <span>Skills: </span>
//           {mentorEl.mentorSkills.join(', ')}
//           <br />
//           <div className='btn-bottom'>
//             <Link className='btn btn-primary' to={`/addmentor/${mentorEl._id}`}>
//               Edit
//             </Link>
//             &nbsp;&nbsp;&nbsp;
//             <button
//               className='btn btn-danger'
//               onClick={() => handleDelete(mentorEl._id)}
//             >
//               Delete
//             </button>
//             &nbsp;&nbsp;&nbsp;
//             <button className='btn btn-secondary' onClick={navigateTOProfile}>
//               View
//             </button>
//           </div>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   ));

//   return (
//     <>
//       <Navigationbar />
//       <div className='search'>
//         <input
//           className='search-panel'
//           type='text'
//           placeholder='Serach Mentor'
//           onChange={(e) => setSearch(e.target.value)}
//           value={search}
//         />
//       </div>
//       <hr />
//       <div className='Post-container'>{mentors}</div>
//     </>
//   );
// };

// export default Homepage;

import React from 'react'
import Navigationbar from '../Navigationbar/Navigationbar';

function Homepage() {
  return (
    <h1>
      <Navigationbar />
      Hello Admin</h1>
  )
}

export default Homepage;