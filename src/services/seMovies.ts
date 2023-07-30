import { SetterOrUpdater } from "recoil";

import { getMovies } from "../api";
import { IMovie } from "../types";

interface ISeMovies {
  handleMovieState: SetterOrUpdater<IMovie[]>;
}

export const seMovies = async ({ handleMovieState }: ISeMovies) => {
  const response = await getMovies({});

  handleMovieState(response);
};
