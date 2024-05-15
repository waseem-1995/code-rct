import { LoadData, saveData } from "../utils/accessLocalStorage";
const initialData = { count:  0 };
const reducer = (oldState = initialData, action) => {
  switch (action.type) {
    case "INCREMENT":
      let newCount = oldState.count + action.payload;
     
      return { ...oldState, count: newCount };
    case "DECREMENT":
      let newCount1 = oldState.count - action.payload;
    
      return { ...oldState, count: newCount1 };
    default:
      return oldState;
  }
};
export { reducer };
