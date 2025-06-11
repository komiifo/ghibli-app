import { useEffect } from "react";
import { useFilmStore } from "../store/store";
import FilmCard from "../components/FilmCard";

const HomePage = () => {
  const { fetchFilms, getFilteredAndSortedFilms } = useFilmStore();

  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);

  const films = getFilteredAndSortedFilms();

  return (
    <div className="container">
      <h1>Liste des Films Studio Ghibli</h1>
      <div className="film-list">
        {films.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
