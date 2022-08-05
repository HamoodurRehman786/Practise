import axios from "axios";
import {
  FETCH_POST_ERROR,
  FETCH_POST_START,
  FETCH_POST_SUCCESS,
} from "./actionTypes";

const fetchPostStart = () => ({
  type: FETCH_POST_START,
});

const fetchPostSuccess = (posts) => ({
  type: FETCH_POST_SUCCESS,
  payload: posts,
});

const fetchPostError = (error) => ({
  type: FETCH_POST_ERROR,
  payload: error,
});

export function fetchPosts() {
  return (dispatch) => {
    dispatch(fetchPostStart());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const posts = response.data;
        dispatch(fetchPostSuccess(posts));
      })
      .catch((error) => {
        dispatch(fetchPostError(error.message));
      });
  };
}
