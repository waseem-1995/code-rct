import * as types from "./actionTypes"
import axios from "axios";


const getTodosRequest=()=>{
    return{
        type:types.GET_TODOS_REQUEST,
    };
}

const getTodosSuccess=(payload)=>{
    return{
        type:types.GET_TODOS_SUCCESS,
        payload,
    };
}

const getTodosError=()=>{
    return{
        type:types.GET_TODOS_ERROR,
    };
}


const postTodosRequest=()=>{
    return{
        type:types.POST_TODOS_REQUEST,
    };
}

const postTodosSuccess=(payload)=>{
    return{
        type:types.POST_TODOS_SUCCESS,
        payload,
    };
}

const postTodosError=()=>{
    return{
        type:types.POST_TODOS_ERROR,
    };
}

const getTodos=(dispatch)=>{
    dispatch(getTodosRequest())
    axios.get("http://localhost:8080/todos")
    .then((r)=>{dispatch(getTodosSuccess(r.data))})
    .catch((e)=>{dispatch(getTodosError())})
}



export {getTodosError,getTodosRequest,getTodosSuccess,postTodosError,postTodosRequest,postTodosSuccess,getTodos}