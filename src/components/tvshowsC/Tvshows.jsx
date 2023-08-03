import React from 'react'
import Mainpage from '../Routespage/Mainpage'
import { useContext } from "react";
import Appcontext from "../context/DataProvider";

const Tvshows = () => {
  // const {video} = useContext(Appcontext)
    const { trendingTv } = useContext(Appcontext);
    // console.log(video);
  return (
    <Mainpage  key={100} arr={trendingTv}/>
  )
}

export default Tvshows