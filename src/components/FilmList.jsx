import React from "react";
import { useFilmStore } from "../store/store";
import FilmCard from "./FilmCard";

const FilmList = () => {
  const films = useFilmStore((state) => state.getFilteredAndSortedFilms());

  return (
    <div className="film-list">
      {films?.map((film) =>
        film ? <FilmCard key={film.id} film={film} /> : null
      )}
    </div>
  );
};

export default FilmList;
