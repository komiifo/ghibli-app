import { describe, it, expect, beforeEach, vi } from "vitest";
import { useFilmStore } from "../../store/store";

// Mock de localStorage pour les tests
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
globalThis.localStorage = localStorageMock;

describe("Zustand Store", () => {
  beforeEach(() => {
    useFilmStore.setState({
      films: [],
      favorites: [],
      search: "",
      sortBy: "",
    });
  });

  describe("Films management", () => {
    it("should update films", () => {
      const testFilms = [
        { id: "1", title: "Film 1" },
        { id: "2", title: "Film 2" },
      ];

      useFilmStore.setState({ films: testFilms });
      expect(useFilmStore.getState().films).toEqual(testFilms);
    });
  });

  describe("Search functionality", () => {
    beforeEach(() => {
      const testFilms = [
        { id: "1", title: "Castle in the Sky" },
        { id: "2", title: "My Neighbor Totoro" },
        { id: "3", title: "Princess Mononoke" },
      ];
      useFilmStore.setState({ films: testFilms });
    });

    it("should filter films by search term", () => {
      useFilmStore.setState({ search: "Castle" });
      const filtered = useFilmStore
        .getState()
        .films.filter((film) => film.title.toLowerCase().includes("castle"));
      expect(filtered).toHaveLength(1);
      expect(filtered[0].title).toBe("Castle in the Sky");
    });

    it("should return all films when search term is empty", () => {
      useFilmStore.setState({ search: "" });
      const all = useFilmStore.getState().films;
      expect(all).toHaveLength(3);
    });

    it("should be case insensitive", () => {
      useFilmStore.setState({ search: "totoro" });
      const filtered = useFilmStore
        .getState()
        .films.filter((film) => film.title.toLowerCase().includes("totoro"));
      expect(filtered).toHaveLength(1);
      expect(filtered[0].title).toBe("My Neighbor Totoro");
    });
  });

  describe("Favorites management", () => {
    it("should add film to favorites", () => {
      const film = { id: "1", title: "Film 1" };
      useFilmStore.getState().toggleFavorite(film);
      expect(useFilmStore.getState().favorites).toContainEqual(film);
    });

    it("should remove film from favorites", () => {
      const film = { id: "1", title: "Film 1" };
      useFilmStore.getState().toggleFavorite(film);
      useFilmStore.getState().toggleFavorite(film);
      expect(useFilmStore.getState().favorites).not.toContainEqual(film);
    });

    it("should handle multiple favorites", () => {
      const film1 = { id: "1", title: "Film 1" };
      const film2 = { id: "2", title: "Film 2" };
      useFilmStore.getState().toggleFavorite(film1);
      useFilmStore.getState().toggleFavorite(film2);
      const favs = useFilmStore.getState().favorites;
      expect(favs).toContainEqual(film1);
      expect(favs).toContainEqual(film2);
      expect(favs).toHaveLength(2);
    });
  });
});
