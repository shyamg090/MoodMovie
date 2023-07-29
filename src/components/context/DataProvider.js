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
// const imgurl = "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";

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
    <Appcontext.Provider
      value={{
        popMov,
        trendingMov,
        trendingTv,
        topRate,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
}

export default Appcontext;