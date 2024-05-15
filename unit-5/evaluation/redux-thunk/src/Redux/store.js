import  {reducer } from "./reducer";
import { legacy_createStore,applyMiddleware} from "redux";

const customMiddleware=(store)=>(next)=>(action)=>{
    //next =>disptach
    // action=>actionobject
    if(typeof action ==="function"){
        return action(store.dispatch)
    }
    return next(action)
}
const store=legacy_createStore(reducer,applyMiddleware(customMiddleware));

export{store}
