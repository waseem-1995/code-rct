import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
import axios from "axios"



export const login = (userData)=>(dispatch) => {
  // Complete login Functionality
  dispatch({type:LOGIN_REQUEST})
  axios
  .post(`https://reqres.in/api/login`,userData)
  .then((res)=>{
    console.log(res.data.token)
    dispatch({type:LOGIN_SUCCESS,payload:res.data.token})
  }).catch((err)=>{
    dispatch({type:LOGIN_FAILURE})
  })


};