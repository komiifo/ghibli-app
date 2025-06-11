import React from "react";
import { useNavigate } from "react-router-dom";
import { useFilmStore } from "../store/store";

const FilmCard = ({ film }) => {
  const { favorites, toggleFavorite } = useFilmStore();
  const navigate = useNavigate();

  const isFavorite = favorites.some((f) => f.id === film.id);

  return (
    <div className="film-card">
      <img
        src={film.image}
        alt={film.title}
        onClick={() => navigate(`/film/${film.id}`)}
      />
      <h3>{film.title}</h3>
      <p>
        {film.director} - {film.release_date}
      </p>
      <div className="film-actions">
        <button onClick={() => navigate(`/film/${film.id}`)}>Voir plus</button>
        <button onClick={() => toggleFavorite(film)}>
          {isFavorite ? "⭐ Retirer" : "☆ Ajouter"}
        </button>
      </div>
    </div>
  );
};

export default FilmCard;
