import React from "react";
import { Link } from "react-router-dom";

export const MovieCard = ({id,Title,Year,Type,rating,Poster}) => {
  return <div className={"movie-card"}>
    <Link to={`/movie/${id}`}>
      <img src={Poster} alt="Poster" />
    </Link>
    <h3>{Title}</h3>
    <h3>{Year}</h3>
    <h3>{rating}</h3>
    <h3>{Type}</h3>
  </div>;
};
