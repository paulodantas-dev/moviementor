import { selector } from "recoil";

import { MoviesState } from "../atom";
import { formatedDefaultMovies } from "../../utils";

export const RandomMovieSelector = selector({
  key: "RandomMovieSelector",
  get: ({ get }) => {
    const movies = get(MoviesState);

    const allMovies = formatedDefaultMovies(movies);

    return allMovies;
  },
});
