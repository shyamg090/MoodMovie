import React, { useEffect, useState } from "react";
import "./Home.scss";
import Row from "./Row";
import Banner from "./Banner";
import axios from "axios";

const url = "https://api.themoviedb.org/3";
const movie = "movie";
const tv = "tv";
const popular = "popular";
const trending = "trending";
const day = "day";
const top_rated = "top_rated";
// const imgurl = "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";

const Home = () => {
  const [popMov, setPopMov] = useState([]);
  const [trendingMov, setTrendingMov] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [topRate, setTopRate] = useState([]);

  // ----------------------to get movies-----------------------
  const getpopMov = async () => {
    const {
      data: { results },
    } = await axios.get(
      `${url}/${movie}/${popular}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setPopMov(results);
  };

  const gettrendTv = async () => {
    const {
      data: { results },
    } = await axios.get(
      `${url}/${trending}/${tv}/${day}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setTrendingTv(results);
  };

  const gettrendMov = async () => {
    const {
      data: { results },
    } = await axios.get(
      `${url}/${trending}/${movie}/${day}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setTrendingMov(results);
  };

  const gettopRate = async () => {
    const {
      data: { results },
    } = await axios.get(
      `${url}/${tv}/${top_rated}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setTopRate(results);
  };

  useEffect(() => {
    getpopMov();
    gettrendMov();
    gettrendTv();
    gettopRate();
  }, []);

  return (
    <section className="home">
      <Banner key={10} arr={popMov} />

      <Row title={"Popular"} key={1} arr={popMov} />
      <Row title={"Trending Movies"} key={2} arr={trendingMov} />
      <Row title={"Trending Tv Shows"} key={3} arr={trendingTv} />
      <Row title={"Top rated Tv Shows"} key={4} arr={topRate} />
    </section>
  );
};

export default Home;
