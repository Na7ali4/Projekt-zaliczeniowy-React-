import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Meme.css";

const Meme = ({ meme, onUpvote, onDownvote, onStar }) => {
  return (
    <div className="meme">
      <img src={meme.img} alt={meme.title} />
      <div className="meme-buttons">
        <button className="upvote-button" onClick={() => onUpvote(meme)}>
          <FontAwesomeIcon icon={faThumbsUp} />
          <span className="vote-count">{meme.upvotes}</span>
        </button>
        <button className="downvote-button" onClick={() => onDownvote(meme)}>
          <FontAwesomeIcon icon={faThumbsDown} />
          <span className="vote-count">{meme.downvotes}</span>
        </button>
        <button className="star-button" onClick={() => onStar(meme.id)}>
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: meme.starred ? "gold" : "gray" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Meme;
