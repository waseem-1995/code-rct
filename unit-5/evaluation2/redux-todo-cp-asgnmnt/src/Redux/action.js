import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, POST_DATA_FAILURE, POST_DATA_REQUEST, POST_DATA_SUCCESS } from "./actionTypes";
//get todos


  export const todoRequest = () => {
    return { type: GET_DATA_REQUEST };
  };
  export const todoSuccess = (payload) => {
    return { type: GET_DATA_SUCCESS, payload };
  };
  export const todoFailure = () => {
    return { type: GET_DATA_FAILURE };
  };
//===>post todos

  export const postRequest = () => {
    return { type: POST_DATA_REQUEST };
  };
  export const postSuccess = (payload) => {
    return { type: POST_DATA_SUCCESS, payload };
  };
  export const postFailure = () => {
    return { type: POST_DATA_FAILURE };
  };
  