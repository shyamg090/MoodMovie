import "./Home.scss";
import Row from "./Row";
import Banner from "./Banner";
import { useContext } from "react";
import Appcontext from "../context/DataProvider";

const Home = () => {
  const { popMov, trendingTv, trendingMov, topRate } = useContext(Appcontext);

  return (
    <section className="home">
      <Banner key={0} arr={trendingMov} />

      <Row title={"Popular"} key={1} arr={popMov} />
      <Row title={"Trending Movies"} key={2} arr={trendingMov} />
      <Row title={"Trending Tv Shows"} key={3} arr={trendingTv} />
      <Row title={"Top rated Tv Shows"} key={4} arr={topRate} />
    </section>
  );
};

export default Home;
