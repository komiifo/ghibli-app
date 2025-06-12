import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../HomePage";

vi.mock("../../store/store", () => ({
  useFilmStore: () => ({
    fetchFilms: vi.fn(),
    getFilteredAndSortedFilms: () => [
      {
        id: "1",
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        release_date: "1986",
        image: "https://example.com/image.jpg",
      },
    ],
    favorites: [], 
    toggleFavorite: vi.fn(), 
  }),
}));

const renderWithRouter = (component) =>
  render(<BrowserRouter>{component}</BrowserRouter>);

describe("HomePage", () => {
  it("displays films", () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText("Castle in the Sky")).toBeInTheDocument();
  });
});
