import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FilmCard from "../FilmCard";

vi.mock("../../store/store", () => ({
  useFilmStore: () => ({
    favorites: [],
    toggleFavorite: vi.fn(),
  }),
}));

const mockFilm = {
  id: "1",
  title: "Castle in the Sky",
  director: "Hayao Miyazaki",
  release_date: "1986",
  image: "https://example.com/image.jpg",
};

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("FilmCard", () => {
  it("renders film details correctly", () => {
    renderWithRouter(<FilmCard film={mockFilm} />);
    expect(screen.getByText("Castle in the Sky")).toBeInTheDocument();
    expect(screen.getByText(/Hayao Miyazaki.*1986/)).toBeInTheDocument();
    expect(screen.getByAltText("Castle in the Sky")).toBeInTheDocument();
  });

  it("renders favorite button", () => {
    renderWithRouter(<FilmCard film={mockFilm} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent("☆"); // ou "★"
    expect(buttons[1]).toHaveTextContent(/voir plus/i);
  });
});
