
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path='/' element={<h1>HOME PAGE</h1>} />
      <Route path='/signup' element={<Signup />}/>
      <Route path='/login' element={<Login />} />
     </Routes>
    </div>
  );
}

export default App;
