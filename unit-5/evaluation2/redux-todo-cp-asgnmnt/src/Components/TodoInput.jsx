import React, { useState } from "react";

const TodoInput = ({ addToDo }) => {
  const [text, setText] = useState("");
  const handleClick = () => {
    addToDo(text);
    setText("");
  };
  return (
    <div>
      <input data-testid = "todo-input"
        value={text}
        type="text"
        placeholder="ADD TODO HERE"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button data-testid ="add-button" onClick={handleClick}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
