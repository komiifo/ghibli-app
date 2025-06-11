import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFilmStore = create(
  persist(
    (set, get) => ({
      films: [],
      favorites: [],
      search: "",
      sortBy: "",
      fetchFilms: async () => {
        const response = await fetch("https://ghibliapi.vercel.app/films");
        const data = await response.json();
        set({ films: data });
      },
      setSearch: (value) => set({ search: value }),
      setSortBy: (value) => set({ sortBy: value }),
      getFilteredAndSortedFilms: () => {
        const { films, search, sortBy } = get();
        let filtered = films.filter((film) =>
          film.title.toLowerCase().includes(search.toLowerCase())
        );

        if (sortBy === "title") {
          filtered.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortBy === "date") {
          filtered.sort((a, b) => a.release_date - b.release_date);
        } else if (sortBy === "score") {
          filtered.sort((a, b) => b.rt_score - a.rt_score);
        }

        return filtered;
      },
      toggleFavorite: (film) =>
        set((state) => {
          const isFav = state.favorites.find((f) => f.id === film.id);
          return {
            favorites: isFav
              ? state.favorites.filter((f) => f.id !== film.id)
              : [...state.favorites, film],
          };
        }),
    }),
    {
      name: "ghibli-storage",
    }
  )
);
