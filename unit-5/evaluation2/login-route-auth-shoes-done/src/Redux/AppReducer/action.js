//Create ActionCreator functions here

import axios from "axios"
import { GET_SHOES_DATA_FAILURE, GET_SHOES_DATA_REQUEST, GET_SHOES_DATA_SUCCESS } from "./actionTypes"

export const get_request_fun = ()=> {
    return {
        type : GET_SHOES_DATA_REQUEST
    }
}

export const get_success_fun = (data)=> {
    return {
        type : GET_SHOES_DATA_SUCCESS,
        payload : data
    }
}

export const get_failure_fun = ()=> {
    return {
        type : GET_SHOES_DATA_FAILURE
    }
}

export const getShoesData = (params)=> (dispatch)=> {
    // dispatch(get_request_fun());
    axios.get("http://localhost:8080/shoes",params)
    .then((res)=> dispatch(get_success_fun(res.data)))
    .catch(()=> dispatch(get_failure_fun()))
}