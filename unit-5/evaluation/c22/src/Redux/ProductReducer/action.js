import axios from "axios"
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes"

const productAction=()=>{
  return {type:GET_PRODUCT_REQUEST}
}
const proSucessAction=(payload)=>{
  return {type:GET_PRODUCT_SUCCESS,payload}
}
const proActionFail=()=>{
  return {type:GET_PRODUCT_FAILURE}
}







export const getProducts = (paramObj)=>(dispatch) => {
  // Complete get products functionality here
dispatch(productAction())
axios
.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`,paramObj)
.then((res)=>{
  console.log(res.data)
  dispatch(proSucessAction(res.data))
  return res.data;
}).catch(()=>{
  dispatch(proActionFail())
})


};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getProducts = getProducts;
}
