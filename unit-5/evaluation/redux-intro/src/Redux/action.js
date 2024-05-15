import * as types from "./actionTypes"
const handleAdd=(payload)=>{
    return{
        type:types.ADD,
        payload
    };
}


const handleReduce=(payload)=>{
    return{
        type:types.REDUCE,
        payload
    };
}

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




export {handleAdd,handleReduce,getTodosError,getTodosRequest,getTodosSuccess,postTodosError,postTodosRequest,postTodosSuccess}