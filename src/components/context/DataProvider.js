import { createContext, useState, useEffect } from "react";
import axios from "axios";

const Appcontext = createContext({});

export const DataProvider = ({ children }) => {
  const url = "https://api.themoviedb.org/3";
  // const videourl = "https://api.themoviedb.org/3/movie/{movie_id}/videos";
  const movie = "movie";
  const tv = "tv";
  const popular = "popular";
  const trending = "trending";
  const day = "day";
  const top_rated = "top_rated";
  const videos = "videos";
  // const page= "page"
  // const imgurl = "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";

  const [popMov, setPopMov] = useState([]);
  // const [popmovPage, setpopmovPage] = useState([]);
  const [trendingMov, setTrendingMov] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [topRate, setTopRate] = useState([]);
  const [video, setvideo] = useState([]);

  // ----------------------to get movies-----------------------
  const getpopMov = async () => {
    const { data } = await axios.get(
      `${url}/${movie}/${popular}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setPopMov(data.results);
    // setpopmovPage(data.page);
  };

  const gettrendTv = async () => {
    const { data } = await axios.get(
      `${url}/${trending}/${tv}/${day}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setTrendingTv(data.results);
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
  const getvideo = async () => {
    const {
      data: { results },
    } = await axios.get(
      `${url}/${movie}/${198102}/${videos}?api_key=${
        process.env.REACT_APP_API_KEY
      }`
    );
    setvideo(results);
    console.log(results);
  };

  useEffect(() => {
    getpopMov();
    gettrendMov();
    gettrendTv();
    gettopRate();
    getvideo();
  }, []);

  return (
    <Appcontext.Provider
      value={{
        popMov,
        trendingMov,
        trendingTv,
        topRate,
        video,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export default Appcontext;
