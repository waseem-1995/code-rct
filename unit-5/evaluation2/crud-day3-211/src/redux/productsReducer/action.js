import axios from "axios";
import {  ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCSSESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes";

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

export const editProduct=(dataObj,id)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    return axios.patch(`http://localhost:8080/products/${id}`,dataObj).then(()=>{
        dispatch({type:PATCH_PRODUCT_SUCCSSESS})
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}