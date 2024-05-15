import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"

//Create ActionCreator functions here
export const login_req_func = ()=> {
    return {
        type : LOGIN_REQUEST
    }
}

export const login_success_func = (token)=> {
    return {
        type : LOGIN_SUCCESS,
        payload : token
    }
}
export const login_failure_func = ()=> {
    return {
        type : LOGIN_FAILURE
    }
}