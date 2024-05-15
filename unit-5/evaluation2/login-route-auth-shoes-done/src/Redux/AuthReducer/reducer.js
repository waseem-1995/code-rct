import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const initialState = {
  data: {
    isAuth: false,
    token: "",
  },
  isLoading: false,
  isError: false,
};

export const authreducer = (state = initialState,{type,payload}) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {...state,isLoading : true};
  
    case LOGIN_SUCCESS : 
      return {...state,data : {isAuth : true, token : payload}};

    case LOGIN_FAILURE : 
      return {...state,isError : true};
    default:
      return state;
  }
};
