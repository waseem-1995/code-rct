import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getMovies } from "../Redux/MovieReducer/action";
import {MovieCard} from "./MovieCard"
import styled from "styled-components";

export const MovieList = () => {
  const dispatch =useDispatch()
  const movies=useSelector((store)=>store.movieReducer.movies)
  const [searchParams]=useSearchParams()

  const paramObj={
    params:{
      rating:searchParams.getAll("rating"),
      _sort:searchParams.get("order")&&"Year",
      _order:searchParams.get("order")

    }
  }

  useEffect(()=>{
    dispatch(getMovies(paramObj))
  },[searchParams])
  return <div data-testid="movie-list">
    {/* Map through movie array  */}
    {movies.length>0 &&
      movies.map((el)=>{
        return<MovieCard  key={el.id} {...el}/>
      })
    }
  </div>;
};
