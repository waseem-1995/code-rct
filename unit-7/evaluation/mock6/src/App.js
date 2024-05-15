import Class from "./Components/Class_section";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Teachers from "./Components/Teachers";
import Welcome from "./Components/Welcome_section";



function App() {
  return (
    <div className="App">
      <Navbar/>     
      <Welcome/>
      <Class/>
      <Teachers/>
      <Footer/>
    </div>
  );
}

export default App;
