import {  ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCSSESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes"

const initialState={
    isLoading: false,
    isError: false,
    products:[]
}
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case PRODUCT_REQUEST:
            return {...state,isLoading:true}
            case ADD_PRODUCT_SUCCESS:
                return {...state,isLoading:false}
                case PRODUCT_FAILURE:
                    return {...state,isLoading:false,isError:true}
                    case GET_PRODUCT_SUCCESS:
                        return {...state,isLoading:false,products:payload}
                        case PATCH_PRODUCT_SUCCSSESS:
                            return {...state,isLoading:false}
                            default:
                              return state
    }

}