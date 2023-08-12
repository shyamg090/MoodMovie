import React from 'react'
import Mainpage from "../Routespage/Mainpage";
import { useContext } from "react";
import Appcontext from "../context/DataProvider";


const Moodbing = () => {
      const { topRate } = useContext(Appcontext);
  return <Mainpage key={100} arr={topRate} datatype={'tv'} />;
}

export default Moodbing