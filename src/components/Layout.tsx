import { useRecoilState } from "recoil";
import { useEffect } from "react";

import { Header } from ".";
import { seMovies } from "../services";
import { MoviesState } from "../store";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const [movieState, handleMovieState] = useRecoilState(MoviesState);

  useEffect(() => {
    seMovies({ handleMovieState });
  }, [handleMovieState]);

  console.log(movieState);

  return (
    <div className="max-w-3xl w-full flex flex-col justify-center items-center text-gray-100 bg-gray-800 rounded-2xl border-8 shadow-xl border-purple-500 gap-9 py-16 px-24">
      <Header />
      {children}
    </div>
  );
};
