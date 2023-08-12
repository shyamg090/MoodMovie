import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Appcontext from "../context/DataProvider";
import { FaFilm } from "react-icons/fa"
import { LiaImdb } from 'react-icons/lia'
// import ReactPlayer from 'react-player/lazy';
import './details.scss';

const Details = () => {
  let { type, id } = useParams();
  const { url, axios } = useContext(Appcontext);
  // movie, videos, 

  const [details, setDetails] = useState({});
  const [castdetails, setCastdetails] = useState([])
  const [genre, setGenre] = useState([])
  const [loading, setLoading] = useState(false);
  // const [video, setvideo] = useState();

  const imgurl = "https://image.tmdb.org/t/p/w500";
  const credits = "credits";


  const getDetails = async (type, id) => {
    setLoading(true);
    const {
      data
    } = await axios.get(
      `${url}/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY
      }
      `
    );

    // console.log(data);
    setDetails(data)

    const array = data.genres;
    setGenre([...array])
    // console.log(genre);
    setLoading(false)
  };

  const getCast = async () => {
    setLoading(true);
    const {
      data
    } = await axios.get(
      `${url}/${type}/${id}/${credits}?api_key=${process.env.REACT_APP_API_KEY
      }
      `
    );
    // console.log(data.cast);
    const [...castArr] = data.cast;
    // console.log(castArr);
    setCastdetails(castArr);
    setLoading(false);
  }

  // const getvideo = async (id) => {
  //   setLoading(true);

  //   const {
  //     data: { results },
  //   } = await axios.get(
  //     `${url}/${movie}/${id}/${videos}?api_key=${process.env.REACT_APP_API_KEY
  //     }
  //     `
  //   );
  //   console.log(results[0].key);
  //   const trailerKey = results[0].key;
  //   setvideo(trailerKey);
  //   setLoading(false)
  // };


  useEffect(() => {
    getDetails(type, id);
    getCast(type, id);
    // getvideo(id);
    // eslint-disable-next-line 
  }, [loading])


  return (
    <div className='detailspage' >
      <div className="titlepart">
        <h1>{details?.original_title}</h1>
        <h1>{details?.name}</h1>
      </div>

      <div className="contentpart">
        <img src={`${imgurl}/${details?.poster_path}`} alt="movie" />
        <div className="overviewpart">
          <h2>{details?.overview}</h2>

          <div className="cast">
            <h2>Cast</h2>
            <div className='cast-card'>
              {
                castdetails.slice(0, 10).map((cast) => {
                  return (
                    <div className='cast-inside' key={cast.id} >
                      <img src={`${imgurl}/${cast?.profile_path}`} alt="movie" />
                      <h3>{cast?.name}</h3>
                    </div>
                  )
                })
              }
            </div>

          </div>

          <div className="details">
            <div className="genres">
              <FaFilm />
              {
                genre.slice(0,).map((item) => {
                  return (
                    <div className='genre-items' key={item.id}>
                      <h2>{item?.name}</h2>
                    </div>
                  )
                })
              }
            </div>

            <div className="imdb">
              <LiaImdb />
              <h2>{details?.vote_average}</h2>
            </div>

            <h2>Release Date : {details?.release_date ? details.release_date : "Nil"}</h2>
            <h2>Runtime : {details?.runtime ? details.runtime : 120} min</h2>
            <h2>status : {details?.status}</h2>
            <h2>Budget : {details?.budget ? details.budget : 200000} USD </h2>
          </div>

        </div>
      </div>
      {/* <div className="youtube">
        <ReactPlayer url={`https:/www.youtube.com/watch?v=${video}`} />
      </div>  */}

    </div>
  )
}

export default Details

/*

 */

/* */