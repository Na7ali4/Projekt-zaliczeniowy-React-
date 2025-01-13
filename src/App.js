import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import { memeData } from "./utils/memeData";
import Hot from "./pages/Hot";
import Regular from "./pages/Regular";
import AddMeme from "./pages/AddMeme";
import Starred from "./pages/Starred";
import "./styles/App.css";

const App = () => {
  const [memes, setMemes] = useState(memeData);

  const handleUpvote = (meme) => {
    setMemes((prev) =>
      prev.map((m) =>
        m.title === meme.title ? { ...m, upvotes: m.upvotes + 1 } : m
      )
    );
  };

  const handleDownvote = (meme) => {
    setMemes((prev) =>
      prev.map((m) =>
        m.title === meme.title ? { ...m, downvotes: m.downvotes + 1 } : m
      )
    );
  };

  const handleStar = (memeToStar) => {
    setMemes((prevMemes) =>
      prevMemes.map((meme) =>
        meme.title === memeToStar.title
          ? { ...meme, starred: !meme.starred }
          : meme
      )
    );
  };

  const handleAddMeme = (newMeme) => {
    setMemes((prev) => [...prev, newMeme]);
  };
  return (
    <Router>
      <div className="app">
        <nav>
          <div className="nav-container">
            <div className="left-links">
              <Link to="/hot">Hot</Link>
              <Link to="/regular">Regular</Link>
              <Link to="/starred">Starred</Link>
            </div>
            <div className="right-link">
              <Link to="/add"> + Add Meme</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route
            path="/hot"
            element={
              <Hot
                memes={memes}
                onUpvote={handleUpvote}
                onDownvote={handleDownvote}
                onStar={handleStar}
              />
            }
          />
          <Route
            path="/regular"
            element={
              <Regular
                memes={memes}
                onUpvote={handleUpvote}
                onDownvote={handleDownvote}
                onStar={handleStar}
              />
            }
          />
          <Route
            path="/starred"
            element={
              <Starred
                memes={memes.filter((meme) => meme.starred)} // Filtruj memy z gwiazdką
                onUpvote={handleUpvote}
                onDownvote={handleDownvote}
                onStar={handleStar}
              />
            }
          />

          <Route path="/add" element={<AddMeme onAddMeme={handleAddMeme} />} />
          <Route path="/" element={<Navigate to="/regular" />} />
          <Route path="/hot" element={<Hot />} />
          <Route path="/regular" element={<Regular />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/add" element={<AddMeme />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
