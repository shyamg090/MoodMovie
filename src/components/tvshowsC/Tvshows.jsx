import React from 'react'
import Mainpage from '../Routespage/Mainpage'
import { useContext } from "react";
import Appcontext from "../context/DataProvider";

const Tvshows = () => {
    const { trendingTv } = useContext(Appcontext);
  return (
    <Mainpage key={100} arr={trendingTv} datatype={'tv'} />
  )
}

export default Tvshows