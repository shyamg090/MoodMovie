import React from 'react'
import Mainpage from "../Routespage/Mainpage";
import { useContext } from "react";
import Appcontext from "../context/DataProvider";


const Trending = () => {
      const { trendingMov } = useContext(Appcontext);
  return <Mainpage key={100} arr={trendingMov} datatype={'movie'} />;
}

export default Trending