import { describe, it, expect, beforeEach } from "vitest";
import { useFilmStore } from "../store";

describe("Zustand Store", () => {
  beforeEach(() => {
    useFilmStore.setState({ films: [], favorites: [], search: "", sortBy: "" });
  });

  it("adds and removes favorites", () => {
    const film = { id: "1", title: "Test Film" };
    useFilmStore.getState().toggleFavorite(film);
    expect(useFilmStore.getState().favorites).toContainEqual(film);
    useFilmStore.getState().toggleFavorite(film);
    expect(useFilmStore.getState().favorites).not.toContainEqual(film);
  });

  it("filters films by search", () => {
    useFilmStore.setState({
      films: [
        { id: "1", title: "Totoro" },
        { id: "2", title: "Kiki" },
      ],
      search: "totoro",
      sortBy: "",
    });
    const result = useFilmStore.getState().getFilteredAndSortedFilms();
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Totoro");
  });
});
