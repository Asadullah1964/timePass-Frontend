import React, { useState } from "react";
import axios from "axios";

const CreatePost = ({ user, onPostCreated }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("content", content);
    if (image) formData.append("image", image);

    try {
      const res = await axios.post("http://localhost:3001/api/posts/create", formData, {
        headers: { "Content-Type": "multipart/form-data", Authorization: user.token }
      });
      onPostCreated(res.data);
      setContent("");
      setImage(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Write something..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Post</button>
    </form>
  );
};

export default CreatePost;
