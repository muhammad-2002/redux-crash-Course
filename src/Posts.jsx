import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./features/posts/postsSlice";

export default function Posts() {
  const { isLoading, isError, error, posts } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // Invoke the thunk action
    dispatch(fetchPosts());
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <h1>Loading ....</h1>;
  }

  if (!isLoading && isError) {
    content = <h1>Error: {error}</h1>;
  }

  if (!isLoading && !isError && posts.length === 0) {
    content = <h1>No Data Found</h1>;
  }

  if (!isLoading && !isError && posts.length > 0) {
    content = (
      <ul>
        {posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    );
  }

  return <div>{content}</div>;
}
