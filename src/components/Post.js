import React from "react";

const Post = ({ post, user, onLike, onComment }) => {
  return (
    <div className="post-card">
      <h4>{post.userId.username}</h4>
      <p>{post.content}</p>
      {post.image && (
        <img
          src={`http://localhost:3001${post.image}`}
          alt="Post"
          style={{ maxWidth: "100%" }}
        />
      )}
      <p>Likes: {post.likes.length}</p>

      {user && (
        <button onClick={() => onLike(post._id)}>
          {post.likes.includes(user._id) ? "Unlike" : "Like"}
        </button>
      )}
    </div>
  );
};

export default Post;
