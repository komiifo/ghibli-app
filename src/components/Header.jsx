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
      <input
        type="text"
        placeholder="Rechercher un film..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="sort-buttons">
        <button
          onClick={() => handleSort("date")}
          className={sortBy === "date" ? "active" : ""}
        >
          Par date
        </button>
        <button
          onClick={() => handleSort("title")}
          className={sortBy === "title" ? "active" : ""}
        >
          Par titre
        </button>
        <button
          onClick={() => handleSort("score")}
          className={sortBy === "score" ? "active" : ""}
        >
          Par score
        </button>
      </div>
    </header>
  );
};

export default Header;
