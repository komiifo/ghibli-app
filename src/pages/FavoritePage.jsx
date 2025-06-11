import React from "react";
import { useFilmStore } from "../store/store";
import FilmCard from "../components/FilmCard";

const FavoritePage = () => {
  const favorites = useFilmStore((state) => state.favorites);

  return (
    <div className="container">
      <h1>Mes Films Favoris</h1>
      {favorites.length === 0 ? (
        <p>Aucun film favori pour le moment.</p>
      ) : (
        <div className="film-list">
          {favorites.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
