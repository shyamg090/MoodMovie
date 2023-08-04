import React, { useContext, useState } from "react";
import "./mainpage.scss";
import { LiaImdb } from "react-icons/lia";
import { BsFillCalendarDateFill } from "react-icons/bs";
import Appcontext from "../context/DataProvider";

const imgurl = "https://image.tmdb.org/t/p/w500";
const youtube = "https://www.youtube.com/watch"

const Content = ({ item }) => {
  const { url, movie, videos, axios } = useContext(Appcontext);
  const [video, setvideo] = useState([]);

  const getvideo = async (id) => {
    const {
      data: { results },
    } = await axios.get(
      `${url}/${movie}/${id}/${videos}?api_key=${
        process.env.REACT_APP_API_KEY
      }
      `
    );
    setvideo([...results]);
    console.log(video);
    window.open(`${youtube}?v=${video[1]?.key}`, "_blank");
  };

  return (
    <div className="cardsRow">
      <div className="cardsImg">
        <img src={`${imgurl}/${item?.poster_path}`} alt="imageposter" />
      </div>
      <div className="cardsContent">
        {/* <img src={item.backdrop_path} alt="movimg" /> */}
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
          {/* {console.log(item.id)} */}

          <button onClick={()=>getvideo(item.id)}> watch now
          </button>
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
