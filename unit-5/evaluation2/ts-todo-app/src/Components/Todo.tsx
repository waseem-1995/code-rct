import React from "react";
function Todo() {
  return (
    <div data-testid="todo-container">
      <h2 data-testid="todo-title">{/* Title should come here  */}</h2>
      <p data-testid="todo-desc">{/* Description should come here  */}</p>
      {/* Based on the status value below checkbox will be checked/unchecked  */}
      <input data-testid="todo-status" type="checkbox" /> 
    </div>
  );
}

export default Todo;
