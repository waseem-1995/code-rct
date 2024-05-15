import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const MovieDetail = () => {
  const {id}=useParams();
  const [movieData,setMovieData]=useState({})
  const movie=useSelector((store)=>store.movieReducer.movies)

  useEffect(()=>{
    const movieDetails=movie.find((el)=>el.id=== +id)
    movieDetails && setMovieData(movieDetails)
  },[])
  return (
    <div>
      <h3 className="movie-id">
        {/* Show Movie Id here, Do not add any extra text */}
        {id}
      </h3>
      {/* Show Movie details here */}
      <img src={movieData.Poster} alt="Poster" />
      <h3>{movieData.Title}</h3>
      <h3>{movieData.Year}</h3>
      <p>
        Rating:
        {new Array(movieData.rating).fill(0).map((_,index)=>{
          return "\u2605"
        })}

      </p>
    </div>
  );
};
