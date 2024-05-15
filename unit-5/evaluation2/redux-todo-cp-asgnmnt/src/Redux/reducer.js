import {
    
    GET_DATA_FAILURE,
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    POST_DATA_FAILURE,
    POST_DATA_REQUEST,
    POST_DATA_SUCCESS,
  } from "./actionTypes";
  
  export const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
     
      case GET_DATA_SUCCESS:
        return { ...state, todos: payload, isLoading: false };
      case GET_DATA_FAILURE:
        return { ...state, isError: true };
      case GET_DATA_REQUEST:
        return { ...state, isLoading: true };
      case POST_DATA_SUCCESS:
        return { ...state, todos: [...state.todos, payload], isLoading: false };
      case POST_DATA_FAILURE:
        return { ...state, isError: true };
      case POST_DATA_REQUEST:
        return { ...state, isLoading: true };
      default:
        return state;
    }
  };