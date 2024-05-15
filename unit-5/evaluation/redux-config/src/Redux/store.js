import  {reducer as TodosReducer} from "./Todos/reducer";
import  {reducer as CounterReducer} from "./Counter/reducer";
import { legacy_createStore,combineReducers } from "redux";

const rootReducer=combineReducers({TodosReducer,CounterReducer})
const store=legacy_createStore(rootReducer);

export{store}
