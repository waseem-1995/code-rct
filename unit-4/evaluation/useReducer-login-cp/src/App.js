import { useState } from "react";
import "./App.css";
import { useReducer } from "react";
const initialState = {
  email: "",
  password: "",
};

//should have the cases "email", "password", and "reset", along with the default cases
const reducer = (state, action) => {
  switch (action.type) {
    case 'email': {
      return { ...state, email: action.payload }
    }
    case 'password': {
      return { ...state, password: action.payload }
    } 
    case 'reset': {
      return initialState
    }
    default: {
      return state
    }
  }

};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [state, dispatch] = useReducer(reducer, initialState)
  const [submittedData, setSubmittedData] = useState({});
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(submittedData)
    setSubmittedData({ ...state })
    dispatch({ type: 'reset' })
  }
  const handleChange = (e) => {
    dispatch({ type: e.target.type, payload: e.target.value })
  }


  return (
    <div className="App">
      <h2>useReducer Hook</h2>
      <form  onSubmit={(e) => handlesubmit(e)}>
        <div >
          <label>User Email</label>
          <input type="email" value={state.email} onChange={handleChange} />
        </div>
        <div >
          <label>User Password</label>
          <input type="password" value={state.password} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* IF there is data in the submittedData variable after submitting the form, show the data here ELSE show the No details found div. */}
      {submittedData.email && submittedData.password ?
        <div>
          <div >User Email:{submittedData.email}</div>
          <div >User Password:{submittedData.password}</div>
        </div>
        :
        <div >No Details Found</div>
      }
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
