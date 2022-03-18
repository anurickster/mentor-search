import { createSlice } from '@reduxjs/toolkit';

const postReducer = createSlice({
  name: 'posts',
  initialState: { posts: [] },
  reducers: {
    FETCH_POSTS(state, action) {
      return { posts: action.payload };
    },
    ADD_POST(state, action) {
      let newPosts = [...state.posts, action.payload];
      return { posts: newPosts };
    },
    DELETE_POST(state, action) {
      let filteredPosts = state.posts.filter((p) => p.id !== action.payload.id);
      return { posts: filteredPosts };
    },
  },
});

const baseUrl = 'http://localhost:9000/posts/';

export const addPost = (post) => {
  return async (dispatch) => {
    let response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    let data = await response.json();
    console.log(data);
    dispatch(ADD_POST(post));
  };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    let response = await fetch(baseUrl);
    let data = await response.json();
    dispatch(FETCH_POSTS(data));
  };
};

export const deletePost = (id) => {
  // http communication
  return (dispatch) => {
    fetch(baseUrl + id, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch(DELETE_POST({ id }));
      })
      .catch((err) => console.log(err));
  };
  // return {type: DELETE_POST, payload: {id}}
};

// export actions and reducer
export const { FETCH_POSTS, ADD_POST, DELETE_POST } = postReducer.actions;
export default postReducer.reducer;
