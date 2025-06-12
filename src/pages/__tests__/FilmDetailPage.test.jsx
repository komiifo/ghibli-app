import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FilmDetailPage from "../FilmDetailPage";

vi.mock("../../store/store", () => ({
  useFilmStore: vi.fn((selector) =>
    selector({
      films: [
        {
          id: "1",
          title: "Castle in the Sky",
          director: "Hayao Miyazaki",
          release_date: "1986",
          image: "https://example.com/image.jpg",
          rt_score: "95",
          description: "A mysterious girl and a magical crystal.",
        },
      ],
    })
  ),
}));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return { ...actual, useParams: () => ({ id: "1" }) };
});

describe("FilmDetailPage", () => {
  it("renders film details", () => {
    render(
      <MemoryRouter>
        <FilmDetailPage />
      </MemoryRouter>
    );
    expect(screen.getByText("Castle in the Sky")).toBeInTheDocument();
    expect(screen.getByText("Hayao Miyazaki")).toBeInTheDocument();
    expect(screen.getByText("1986")).toBeInTheDocument();
    expect(screen.getByText("95")).toBeInTheDocument();
    expect(
      screen.getByText("A mysterious girl and a magical crystal.")
    ).toBeInTheDocument();
  });
});
