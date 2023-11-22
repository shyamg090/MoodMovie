import React from "react";
import "./Home.scss";

const imgurl = "https://image.tmdb.org/t/p/original";

const Banner = ({ arr }) => {

  // const x = function () {
  //   let i = 0;

  //   const getRan = () => {
  //     i = Math.floor(Math.random() * 10) + 1;
  //     return i;
  //   }
  //   const randnum = setTimeout(getRan, 10000);
  //   return randnum;
  // };

  // const j = x();
  const j = 0;
  
  return (
    <div
      className="banner"
      style={{
        backgroundImage: arr[0]
          ? `url(${`${imgurl}/${arr[j]?.poster_path}`})`
          : "#001C30",
      }}
    >
      {/* {console.log("random working??? "+j)} */}
      {arr[0] && <h1>{arr[j]?.title}</h1>}
      {arr[0] && <h2>{arr[j]?.overview}</h2>}
    </div>
  );
};

export default Banner;

// style={{
//     backgroundImage: arr[8] ? `url(${`${imgurl}/${arr[8].backdrop_path}`})` : "#001C30"
// } }
