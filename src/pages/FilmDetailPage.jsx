import React from "react";
import { useParams } from "react-router-dom";
import { useFilmStore } from "../store/store";

const FilmDetailPage = () => {
  const { id } = useParams();
  const film = useFilmStore((state) =>
    state.films.find((film) => film.id === id)
  );

  if (!film) return <p>Chargement en cours...</p>;

  return (
    <div className="container">
      <h1>{film.title}</h1>
      <img src={film.image} alt={film.title} />
      <p>
        <strong>Réalisateur:</strong> {film.director}
      </p>
      <p>
        <strong>Année:</strong> {film.release_date}
      </p>
      <p>
        <strong>Score:</strong> {film.rt_score}
      </p>
      <p>{film.description}</p>
    </div>
  );
};

export default FilmDetailPage;
