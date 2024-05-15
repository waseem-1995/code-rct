import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./AppReducer/reducer";
import { authreducer } from "./AuthReducer/reducer";

// NOTE: use this store variable to create a store.
const root_reducer = combineReducers({
  shoe : reducer,
  auth : authreducer
})
export const store = legacy_createStore(root_reducer,applyMiddleware(thunk));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
