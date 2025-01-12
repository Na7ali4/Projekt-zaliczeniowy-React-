import React from "react";
import MemeList from "../components/MemeList";

const Hot = ({ memes, onUpvote, onDownvote, onStar }) => {
  const hotMemes = memes.filter((meme) => meme.upvotes - meme.downvotes > 5);
  return (
    <div>
      <h2 className="page-title">Hot Memes</h2>
      <MemeList
        memes={hotMemes}
        onUpvote={onUpvote}
        onDownvote={onDownvote}
        onStar={onStar}
      />
    </div>
  );
};

export default Hot;
