import { useRecoilValue } from "recoil";

import { Card, Layout } from "../components";
import { RandomMovieSelector } from "../store";

export const Home: React.FC = () => {
  const teste = useRecoilValue(RandomMovieSelector);

  console.log(teste);

  return (
    <Layout>
      <div className="flex items-center justify-center gap-9">
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
};
