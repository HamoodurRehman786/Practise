import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./Redux/action";

function Api() {
  const { posts, loading } = useSelector((state) => ({ ...state.data }));
  const dispatch = useDispatch();
  return (
    <div className="button">
      <button className="btn" onClick={() => dispatch(fetchPosts())}>
        Fetch Post
      </button>
      {!loading ? (
        posts.map((post) => <h3 key={post.id}>{post.body}</h3>)
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default Api;
