import { IMovie } from "../types";

export const formatedDefaultMovies = (movies: IMovie[]) => {
  return movies.map((movie) => ({
    title: movie.title,
    imageurl: movie.imageurl[0],
    rating: movie.imdbrating,
    released: movie.released,
    genre: movie.genre[0],
  }));
};
