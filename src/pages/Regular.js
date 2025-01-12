import React from "react";
import MemeList from "../components/MemeList";

const Regular = ({ memes, onUpvote, onDownvote, onStar }) => {
  const regularMemes = memes.filter(
    (meme) => meme.upvotes - meme.downvotes <= 5
  );
  return (
    <div>
      <h2 className="page-title">Regular Memes</h2>
      <MemeList
        memes={regularMemes}
        onUpvote={onUpvote}
        onDownvote={onDownvote}
        onStar={onStar}
      />
    </div>
  );
};

export default Regular;
