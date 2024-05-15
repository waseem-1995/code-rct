import axios from "axios"
import { GET_MOVIES_FAILURE, GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS } from "./actionTypes"

const moviesrequest=()=>{
  return {type:GET_MOVIES_REQUEST}
}
const moviessuccess=(payload)=>{
  return {type:GET_MOVIES_SUCCESS,payload}
}
const moviesfailure=()=>{
  return {type:GET_MOVIES_FAILURE}
}



export const getMovies = (paramObj)=>(dispatch) => {
  // Complete the getMovies logic here
dispatch(moviesrequest())
axios
.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`,paramObj)
.then((res)=>{
  //console.log(res.data)
  dispatch(moviessuccess(res.data))
  return res.data
}).catch((err)=>{
  dispatch(moviesfailure())
})

};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getMovies = getMovies;
}
