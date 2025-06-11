import { useNavigate } from "react-router-dom";
import { useFilmStore } from "../store/store";

const FilmCard = ({ film }) => {
  const { favorites, toggleFavorite } = useFilmStore();
  const navigate = useNavigate();

  if (!film) return null;
  const isFavorite = favorites.some((f) => f.id === film.id);

  return (
    <div className="movie-card">
      <div className="movie-card-image">
        <img
          src={
            film.image || "https://via.placeholder.com/200x300?text=Pas+d'image"
          }
          alt={film.title || "Titre inconnu"}
          onClick={() => navigate(`/film/${film.id}`)}
        />
        <button
          className="favorite-button"
          onClick={() => toggleFavorite(film)}
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </div>
      <div className="movie-info">
        <h3>{film.title}</h3>
        <p>
          {film.director} - {film.release_date}
        </p>
        <button
          className="details-link"
          onClick={() => navigate(`/film/${film.id}`)}
        >
          Voir plus
        </button>
      </div>
    </div>
  );
};

export default FilmCard;
