import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../Components/PrivateRoute";
import { Homepage } from "./Homepage";
import {Login} from "./Login"
import { MovieDetail } from "./MovieDetail";

export const MainRoutes = () => {
  return <Routes>{/* Provide all routes here */}
  <Route path="/" element={<Homepage/>} />
  <Route path="/login" element={<Login/>} />
  <Route
    path="/movie/:id"
    element={<PrivateRoute><MovieDetail/></PrivateRoute>}
  />
  <Route path="*" element={<h1>404 not found</h1>} />
  </Routes>;
};
