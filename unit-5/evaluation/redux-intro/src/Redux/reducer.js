
import * as types from "./actionTypes"

const initialstate={
    count:15,
    todos:[],
    isLoading:false,
    isError:false
};

const reducer=(oldState=initialstate,action)=>{
    const{type,payload}=action;
    switch(type){
        case types.ADD:
            return{...oldState,count:oldState.count+payload};
        case types.REDUCE:
            return{...oldState,count:oldState.count-payload};

        case types.GET_TODOS_REQUEST:
            return{...oldState, isLoading:true};
        case types.GET_TODOS_SUCCESS:
            return{...oldState,isLoading:false,todos:payload};
        case types.GET_TODOS_ERROR:
            return{...oldState,isLoading:false,isError:true}
        case types.POST_TODOS_REQUEST:
                return{...oldState, isLoading:true};
        case types.POST_TODOS_SUCCESS:
                return{...oldState,isLoading:false,todos:[...oldState.todos,payload]};
        case types.POST_TODOS_ERROR:
                return{...oldState,isLoading:false,isError:true}           
        default:
            return oldState
    }
}

export{reducer}