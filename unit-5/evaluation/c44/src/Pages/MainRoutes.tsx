import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AddProduct } from "./AddProduct";

export const MainRoutes = () => {
  return <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/add-product" element={<AddProduct/>}></Route>
  </Routes>;
};
