import React, { useState } from "react";

const AddMeme = ({ onAddMeme }) => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && img) {
      onAddMeme({ title, upvotes: 0, downvotes: 0, img, starred: false });
      setTitle("");
      setImg("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Meme</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <button type="submit">Add Meme</button>
    </form>
  );
};

export default AddMeme;
