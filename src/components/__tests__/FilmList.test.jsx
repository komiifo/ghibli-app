import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FilmList from "../FilmList";

const mockState = {
  getFilteredAndSortedFilms: () => [
    {
      id: "1",
      title: "Castle in the Sky",
      director: "Hayao Miyazaki",
      release_date: "1986",
      image: "https://example.com/image1.jpg",
    },
    {
      id: "2",
      title: "My Neighbor Totoro",
      director: "Hayao Miyazaki",
      release_date: "1988",
      image: "https://example.com/image2.jpg",
    },
  ],
  favorites: [],
  toggleFavorite: vi.fn(),
};

vi.mock("../../store/store", async () => {
  return {
    useFilmStore: (selector) => (selector ? selector(mockState) : mockState),
  };
});

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("FilmList", () => {
  it("renders list of films", () => {
    renderWithRouter(<FilmList />);
    expect(screen.getByText("Castle in the Sky")).toBeInTheDocument();
    expect(screen.getByText("My Neighbor Totoro")).toBeInTheDocument();
  });
});
