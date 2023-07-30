import { Card, Layout } from "../../components";
import { getMovies } from "../../api/getMovies";
import { useEffect } from "react";

export const Home: React.FC = () => {
  useEffect(() => {
    getMovies({}).then((res) => {
      console.log(res);
    });
  }, []);

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
