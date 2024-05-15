import React from "react";
import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";
import axios from "axios";
const TodoList = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {

get_data()
  
  }, []);


  const get_data=()=>{
    axios.get("http://localhost:8080/todos").then((res)=>{
      //console.log(res.data);

      setData(res.data)
    })
  }

  // const deleteItem = (id) => {
  //   fetch(`http://localhost:8080/todos/${id}`, {
  //     method: "DELETE",
  //   }).then((res) => {
  //     if (res.ok) {
  //       const newData = data.filter((item) => item.id !== id);
  //       setData(newData);
  //     }
  //   });
  // };
  // const addItem = (title) => {
  //   fetch("http://localhost:8080/todos", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ title: title, completed: false }),
  //   })
  //     .then((res) => res.json())
  //     .then((data1) => {
  //       setData([...data, data1]);
  //     });
  // };
  // const editItem = (id, editData) => {
  //   fetch(`http://localhost:8080/todos/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ title: editData, completed: false }),
  //   })
  //     .then((res) => res.json())
  //     .then((data1) => {
  //       const newData = data.map((item) => {
  //         if (item.id === id) {
  //           return { ...item, title: editData };
  //         }
  //         return item;
  //       });
  //       setData(newData);
  //     });
  // };

 const handleadd=()=>{
  let payload={
    title:input, 
    completed:false
  }
axios.post("http://localhost:8080/todos", payload).then(get_data)


 }

 const delete_func=(id)=>{
  axios.delete(`http://localhost:8080/todos/${id}`).then(get_data)

 }

 const edit_func=(id, value)=>{

let payload={
  title:value,
  completed:true
}

  axios.put(`http://localhost:8080/todos/${id}`, payload).then(get_data)
 }






  return (
    <>
      <center>
        <label htmlFor="add">Add Item</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleadd}>Add</button>
      </center>

      <table style={{ display: "inline" }}>
        <center>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Completed</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                delete_func={delete_func}
                edit_func={edit_func}
              />
            ))}
          </tbody>
        </center>
      </table>
    </>
  );
};
export default TodoList;
