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
      <Row title={"Popular"} key={1} arr={popMov} datatype={'movie'} />
      <Row title={"Trending Movies"} key={2} arr={trendingMov} datatype={'movie'} />
      <Row title={"Trending Tv Shows"} key={3} arr={trendingTv} datatype={'tv'} />
      <Row title={"Top rated Tv Shows"} key={4} arr={topRate} datatype={'tv'} />
    </section>
  );
};

export default Home;
