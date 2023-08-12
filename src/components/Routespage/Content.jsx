import "./mainpage.scss";
import { LiaImdb } from "react-icons/lia";
import { Link } from "react-router-dom";
import { BsFillCalendarDateFill } from "react-icons/bs";

const imgurl = "https://image.tmdb.org/t/p/w500";

const Content = ({ item, datatype }) => {

  return (
    <div className="cardsRow">
      <div className="cardsImg">
        <img src={`${imgurl}/${item?.poster_path}`} alt="imageposter" />
      </div>
      <div className="cardsContent">
        <div className="title">
          <h1>
            {item?.title}
            {item?.name}
          </h1>
          <h2>{item?.overview}</h2>
        </div>
        <div className="ratings">
          <h4>
            <LiaImdb /> {item?.vote_average}
          </h4>
          <h4>
            <BsFillCalendarDateFill /> {item?.release_date}
            {item?.first_air_date}
          </h4>
          <button>
            <Link to={`/details/${datatype}/${item.id}`}>Know more</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
//           {video ? <button onClick={() => window.open(`${youtube}?v=${video}`, "_blank") }> Watch Now </button> : <button onClick={() => getvideo(item.id)}>Get link</button>}

