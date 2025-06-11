import React from "react";
import { useFilmStore } from "../store/store";

const Header = () => {
  const { setSearch, setSortBy, sortBy } = useFilmStore();

  const handleSort = (value) => {
    if (sortBy === value) {
      setSortBy(""); 
    } else {
      setSortBy(value); 
    }
  };

  return (
    <header className="header">
      <div className="search-container">
        <input
          type="text"
          placeholder="Rechercher un film..."
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="sort-container">
        <button
          className={`sort-button ${sortBy === "date" ? "active" : ""}`}
          onClick={() => handleSort("date")}
        >
          Par date
        </button>
        <button
          className={`sort-button ${sortBy === "title" ? "active" : ""}`}
          onClick={() => handleSort("title")}
        >
          Par titre
        </button>
        <button
          className={`sort-button ${sortBy === "score" ? "active" : ""}`}
          onClick={() => handleSort("score")}
        >
          Par score
        </button>
      </div>
    </header>
  );
};

export default Header;
