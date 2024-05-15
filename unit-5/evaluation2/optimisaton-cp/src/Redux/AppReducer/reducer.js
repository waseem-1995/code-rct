import * as types from "./actionType";



const initialState = {
   isLoading: false,
   isError: false,
   coffeeData: [],
   restaurantData: [],
   employeeData : []
};

const reducer = (state = initialState,action) => {
  const {type,payload}=action;
  switch(type){
    case types.GET_DATA_REQUEST:
      return{...state,isLoading:true,isError:false};
    case types.GET_DATA_FAILURE:
      return{...state,isLoading:false,isError:true,};
    case types.GET_COFFEE_DATA_SUCCESS:
      return {...state,isLoading:false,isError:false,coffeeData:[...payload]};
    case types.GET_RESTAURANT_DATA_SUCCESS:
      return {...state,isLoading:false,isError:false,restaurantData:[...payload]};
    case types.GET_EMPLOYEE_DATA_SUCCESS:
      return {...state,isLoading:false,isError:false,employeeData:[...payload]};    
    default:  
      return state
  }    
};

export { reducer };