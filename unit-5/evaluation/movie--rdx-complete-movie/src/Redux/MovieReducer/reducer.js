import { GET_MOVIES_FAILURE, GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS } from "./actionTypes"


const initialstate={
    isLoading: false,
    isError: false,
    movies: [],
}

export const reducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case  GET_MOVIES_REQUEST:
            return {...state,isLoading:true}
            case GET_MOVIES_SUCCESS:
                return {...state,isLoading:false,movies:payload};
                case GET_MOVIES_FAILURE:
                    return {...state,isLoading:false,isError:true}
        default:
            return state
    }

}