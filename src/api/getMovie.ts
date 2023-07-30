import { instance } from "./instance";

interface MovieProps {
  imdbid: string;
}

export const getMovie = async ({ imdbid }: MovieProps) => {
  const response = await instance.get(`/gettitleDetails?imdbid=${imdbid}`);
  return response.data;
};
