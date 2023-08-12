import React from 'react'
import Mainpage from "../Routespage/Mainpage";
import { useContext } from "react";
import Appcontext from "../context/DataProvider";


const Movies = () => {
      const { popMov } = useContext(Appcontext);
  return <Mainpage key={100} arr={popMov} datatype={'movie'} />;
}

export default Movies