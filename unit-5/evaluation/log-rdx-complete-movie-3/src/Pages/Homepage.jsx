import React from "react";
import { Sidebar} from "../Components/Sidebar"
import {MovieList} from "../Components/MovieList"
export const Homepage = () => {
  return (
    <div>
      <Sidebar />
      <MovieList />
    </div>
  );
};
