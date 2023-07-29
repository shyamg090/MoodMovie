import React from "react";
import "./Home.scss";

const imgurl = "https://image.tmdb.org/t/p/original";

const Banner = ({ arr }) => {

  const i = setInterval(() => {
        let i = Math.floor(Math.random() * 20 + 1);
        return i;
  }, 2000);
  

  return (
    <div
      className="banner"
      style={{
        backgroundImage: arr[0]
          ? `url(${`${imgurl}/${arr[i]?.poster_path}`})`
          : "#001C30",
      }}
    >
      {console.log("random working??? "+i)}
      {arr[0] && <h1>{arr[i]?.title}</h1>}
      {arr[0] && <h2>{arr[i]?.overview}</h2>}
    </div>
  );
};

export default Banner;

// style={{
//     backgroundImage: arr[8] ? `url(${`${imgurl}/${arr[8].backdrop_path}`})` : "#001C30"
// } }
