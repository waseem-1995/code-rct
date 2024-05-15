
import * as types from "./actionTypes"

const initialstate={
    count:15,
    
};

const reducer=(oldState=initialstate,action)=>{
    const{type,payload}=action;
    switch(type){
        case types.ADD:
            return{...oldState,count:oldState.count+payload};
        case types.REDUCE:
            return{...oldState,count:oldState.count-payload};

        default:
            return oldState
    }
}

export{reducer}