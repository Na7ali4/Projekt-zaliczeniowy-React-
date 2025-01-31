import React from "react";
import Meme from "./Meme";

const MemeList = ({ memes, onUpvote, onDownvote, onStar }) => {
  return (
    <div className="meme-list">
      {memes.map((meme) => (
        <Meme
          key={meme.id}
          meme={meme}
          onUpvote={onUpvote}
          onDownvote={onDownvote}
          onStar={onStar}
        />
      ))}
    </div>
  );
};

export default MemeList;
