import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
import axios from "axios"

  const loginAction=()=>{
    return {type:LOGIN_REQUEST}
  }
  const loginSucessAction=(payload)=>{
    return {type:LOGIN_SUCCESS,payload}
  }
  const loginActionFail=()=>{
    return {type:LOGIN_FAILURE}
  }


export const login = (userData)=>(dispatch) => {
  // Complete login Functionality
  dispatch(loginAction())
  axios
  .post(`https://reqres.in/api/login`,userData)
  .then((res)=>{
    console.log(res.data.token)
    dispatch(loginSucessAction(res.data.token))
  }).catch((err)=>{
    dispatch(loginActionFail())
  })


};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
