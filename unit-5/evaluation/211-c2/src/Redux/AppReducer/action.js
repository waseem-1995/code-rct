import axios from "axios";
import * as types from "./actionType"

const getCoffeeData =()=>(dispatch)=>{
    dispatch({type:types.GET_DATA_REQUEST});

    return axios
        .get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`)
        .then((res)=>{
            dispatch({type:types.GET_COFFEE_DATA_SUCCESS,payload:res.data.data});
        })
        .catch((e)=>{
            dispatch({type:types.GET_DATA_FAILURE})
        })

}

const getRestaurantData=()=>(dispatch)=>{
    dispatch({type:types.GET_DATA_REQUEST});

    return axios
        .get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`)
        .then((res)=>{
            dispatch({type:types.GET_RESTAURANT_DATA_SUCCESS,payload:res.data.data});
        })
        .catch((e)=>{
            dispatch({type:types.GET_DATA_FAILURE})
        })

}

const getEmployeeData=()=>(dispatch)=>{
    dispatch({type:types.GET_DATA_REQUEST});

    return axios
        .get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`)
        .then((res)=>{
            dispatch({type:types.GET_EMPLOYEE_DATA_SUCCESS,payload:res.data.data});
        })
        .catch((e)=>{
            dispatch({type:types.GET_DATA_FAILURE})
        })

}

export {getCoffeeData,getEmployeeData,getRestaurantData}