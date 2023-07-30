import { atom } from "recoil";

import { IMovie } from "../../types";

export const MoviesState = atom({
  key: "MoviesState",
  default: [] as IMovie[],
});
