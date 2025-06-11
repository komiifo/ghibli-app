import { useParams } from "react-router-dom";
import { useFilmStore } from "../store/store";

const FilmDetailPage = () => {
  const { id } = useParams();
  const film = useFilmStore((state) =>
    state.films.find((film) => film.id === id)
  );

  if (!film) return <p>Film introuvable.</p>;

  return (
    <div className="container">
      <h1>{film.title}</h1>
      <img
        src={
          film.image || "https://via.placeholder.com/200x300?text=Pas+d'image"
        }
        alt={film.title || "Titre inconnu"}
      />
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
