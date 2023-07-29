import React from "react";
import "./mainpage.scss";
import { LiaImdb } from "react-icons/lia";
import { BsFillCalendarDateFill } from "react-icons/bs";

const imgurl = "https://image.tmdb.org/t/p/w500";

const Content = ({ item }) => {
  // console.log(item);
  return (
    <div className="cardsRow">
      <div className="cardsImg">
        <img src={`${imgurl}/${item?.poster_path}`} alt="imageposter" />
      </div>
      <div className="cardsContent">
        {/* <img src={item.backdrop_path} alt="movimg" /> */}
        <div className="title">
          <h1>
            {item?.original_title} 
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
          <button>Watch Now</button>
        </div>
      </div>
    </div>
  );
};

export default Content;

// style={{
//     backgroundImage: item[8] ? `url(${`${imgurl}/${item[8].backdrop_path}`})` : "#001C30"
// } }

// style={{
//           backgroundImage: `url(${`${imgurl}/${item?.poster_path}`})`,
//         }}
