import React from "react";
import MemeList from "../components/MemeList";

const Starred = ({ memes, onUpvote, onDownvote, onStar }) => {
  return (
    <div>
      <h2 className="page-title">Starred Memes</h2>
      <MemeList
        memes={memes}
        onUpvote={onUpvote}
        onDownvote={onDownvote}
        onStar={onStar}
      />
    </div>
  );
};

export default Starred;
