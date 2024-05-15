import axios, { AxiosResponse } from "axios";
import { Products } from "./Components/ProductList";


export const addProduct = async(payload:Products) => {
  
  const response:AxiosResponse<Products>=await axios
  .post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`,payload);
  return response.data;
  
};

export const getProducts = async() => {
  // Get products functionality
  const response:AxiosResponse<Products[]>=await axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`);
  return response.data;
};

export const updateLike = () => {
  // Update like functionality
};

export const updateDisLike = () => {
  // Update dislike functionality
};

export const deleteProduct = () => {
  // Delete functionality
};
