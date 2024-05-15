import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AddPost } from "./Components/AddPost";
import Navbar from "./Components/Navbar";
import Pagination from "./Components/Pagination";
import Posts from "./Components/Posts";

function App() {
  // DO NOT Change anything in this file
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddPost />
              <Posts />
              <Pagination />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
