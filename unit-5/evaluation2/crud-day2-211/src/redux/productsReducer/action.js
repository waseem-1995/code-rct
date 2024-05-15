import axios from "axios";
import {  ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes";

export const addProduct=(data)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.post("http://localhost:8080/products",data).then(()=>{
        dispatch({type:ADD_PRODUCT_SUCCESS})
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

export const getProduct=(paramObj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.get("http://localhost:8080/products",paramObj).then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    }).catch((err)=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}