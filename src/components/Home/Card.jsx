import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.scss";
// import Row from './Row';

const imgurl = "https://image.tmdb.org/t/p/w500";

const Card = ({ img, movId  , datatype}) => {
  return (
    <div className="card">
      <Link to={`/details/${datatype}/${movId}`}>
        <img src={`${imgurl}/${img}`} alt="movie" />
      </Link>
      {/* gggg Lorem ipsum dolor sit amet. lorem30 */}
    </div>
  );
}

export default Card