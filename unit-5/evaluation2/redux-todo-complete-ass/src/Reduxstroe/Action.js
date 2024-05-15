import { ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./Action.type"

export const getTodoRequest=()=>{
    return {type:GET_TODO_REQUEST}
}
export const getTodoSuccess=(payload)=>{
    return {type:GET_TODO_SUCCESS,payload}
}
export const getTodoFailure=()=>{
    return {type:GET_TODO_FAILURE}
}

export const addTodoRequest=()=>{
    return {type:ADD_TODO_REQUEST}
}
export const addTodoSuccess=(payload)=>{
    return {type:ADD_TODO_SUCCESS,payload}
}
export const addTodoFailure=()=>{
    return {type:ADD_TODO_FAILURE}
}

export const ToggleTodoRequest=()=>{
    return {type:ADD_TODO_REQUEST}
}
export const ToggleTodoSuccess=(payload)=>{
    return {type:ADD_TODO_SUCCESS,payload}
}
export const ToggleTodoFailure=()=>{
    return {type:ADD_TODO_FAILURE}
}

