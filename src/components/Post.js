import React, { useState } from "react";
import PropTypes from "prop-types";

const Post = ({ postData, handleUpvote }) => {
  const { title, body, tags, author, date, isPublished } = postData;
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    setCount((prev) => prev + 1);
    handleUpvote(e.target.value);
  };

  return (
    <div className="post">
      <div className="post-body">
        <h2>{title}</h2>
        {isPublished ? <p>{body}</p> : <p>Coming soon!</p>}
      </div>
      <div className="post-counter">
        <span style={{ marginRight: "12px" }}>Total votes: {count}</span>
        <button onClick={handleClick} value={title} type="button">
          Upvote this
        </button>
      </div>
      <div className="post-author">Author: {author}</div>
      <div className="post-date">Published: {date}</div>
      <h3>Tags:</h3>
      <ul className="post-tags">
        {tags.length > 0 && tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
    </div>
  );
};

Post.propTypes = {
  postData: PropTypes.shape({
    author: PropTypes.string,
    body: PropTypes.string,
    date: PropTypes.string,
    isPublished: PropTypes.bool,
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
  }).isRequired,
  handleUpvote: PropTypes.func.isRequired,
};

export default Post;
