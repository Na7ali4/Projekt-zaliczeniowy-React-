import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Navigate,
  useLocation,
} from "react-router-dom";
import { memeData } from "./utils/memeData";
import Hot from "./pages/Hot";
import Regular from "./pages/Regular";
import AddMeme from "./pages/AddMeme";
import Starred from "./pages/Starred";
import "./styles/App.css";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="breadcrumbs">
      <NavLink to="/">Home</NavLink>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <span key={to}>
            {" > "}
            <NavLink to={to}>
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </NavLink>
          </span>
        );
      })}
    </div>
  );
}

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

  const handleStar = (memeId) => {
    setMemes((prevMemes) =>
      prevMemes.map((meme) =>
        meme.id === memeId ? { ...meme, starred: !meme.starred } : meme
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
              <NavLink
                to="/hot"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Hot
              </NavLink>
              <NavLink
                to="/regular"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Regular
              </NavLink>
              <NavLink
                to="/starred"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Starred
              </NavLink>
            </div>
            <div className="right-link">
              <NavLink
                to="/add"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <span className="add-icon">+</span> Add Meme
              </NavLink>
            </div>
          </div>
        </nav>

        {/* Breadcrumbs */}
        <Breadcrumbs />

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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
