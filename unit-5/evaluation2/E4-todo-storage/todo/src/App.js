import React from "react";
import TodoList from "./components/TodoList";
function App() {
  const styles = {
    backgroundColor: "lightblue",
    padding: "10px",
    margin: "10px",
    border: "1px solid black",
    borderRadius: "5px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  };
  return (
    <>
      <h1 style={styles}>Todo List</h1>
      <div className="App">
        <TodoList />
      </div>
    </>
  );
}

export default App;
