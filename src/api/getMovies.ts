import { getYear } from "date-fns";
import { instance } from './instance'

interface MoviesProps {
  start_year?: number;
  end_year?: number;
  min_imdb?: number;
  max_imdb?: number;
  genre?: string;
  language?: string;
  type?: string;
  sort?: string;
  page?: number;
}

export const getMovies = async ({
  start_year = 1900,
  end_year = getYear(new Date()),
  min_imdb = 0,
  max_imdb = 10,
  genre = "action,sci-fi,fantasy",
  language = "english,spanish,french,portuguese",
  type = "movie",
  sort = "highestrated",
  page = 1,
}: MoviesProps) => {
  console.log({
    start_year,
    end_year,
    min_imdb,
    max_imdb,
    genre,
    type,
    sort,
    language,
    page,
  });

  const response = await instance.get(`/advancedsearch?start_year=${start_year}&end_year=${end_year}&min_imdb=${min_imdb}&max_imdb=${max_imdb}&genre=${genre}&type=${type}&sort=${sort}&language=${language}&page=${page}`);
  return response.data;
};
