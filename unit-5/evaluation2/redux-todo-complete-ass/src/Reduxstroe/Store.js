import {legacy_createStore} from "redux";
import { reducer } from "./Reducer";

const initialstate={
   Todos:[],
   isLoading:false,
   isError:false
}
export const store =legacy_createStore(reducer,initialstate)