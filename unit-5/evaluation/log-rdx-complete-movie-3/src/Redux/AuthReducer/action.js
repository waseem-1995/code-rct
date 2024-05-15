import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
import axios from "axios"

  const loginrequest=()=>{
    return {type:LOGIN_REQUEST}
  }
  const loginSucess=(payload)=>{
    return {type:LOGIN_SUCCESS,payload}
  }
  const loginfailure=()=>{
    return {type:LOGIN_FAILURE}
  }


export const login = (userData)=>(dispatch) => {
  // Complete login Functionality
  dispatch(loginrequest());
  return axios
  .post(`https://reqres.in/api/login`,userData)
  .then((res)=>{
    console.log(res.data.token)
    dispatch(loginSucess(res.data.token))
  }).catch((err)=>{
    dispatch(loginfailure())
  })


};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
