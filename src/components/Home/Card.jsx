import React from 'react'
import "./Home.scss";
// import Row from './Row';

const imgurl = "https://image.tmdb.org/t/p/w500";

const Card = ({img}) => {

  return (
    <div className="card">
      <img src={`${imgurl}/${img}`} alt="movie" />
    </div>
  );
}

export default Card