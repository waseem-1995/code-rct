import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {

  // TODO: Remove below const and instead import them from chakra
  const Button = () => <div />;

  return <div className="App">

    <Dashboard/>
      {/* <Button width = "150px"className = "toggleForm" >
        Toggle Form  
      </Button> */}


  </div>;
}

export default App;
