import { useState } from "react";
import Counter from "./components/Counter";
import MainRoutes from "./components/MainRoutes";
function App() {
  const [show,setShow]=useState(false)
  return (
    
    <div className="App">
    {show && <Counter/>}
    <button onClick={()=>{setShow(!show)}}>show counter</button>
    <MainRoutes/>
    </div>
  );
}

export default App;
