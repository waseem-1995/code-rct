import axios from "axios";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { postFailure, postRequest, postSuccess, todoFailure, todoRequest, todoSuccess } from "../Redux/action";
import TodoInput from "./TodoInput";


const Todos = () => {

  const dispatch=useDispatch()
  const { isLoading, todos } = useSelector((store) => {
    return {
      isLoading: store.isLoading,
      todos: store.todos,
    };
  }, shallowEqual);



  const getdata=()=>{
    dispatch(todoRequest())
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`).then((res)=>{
      dispatch(todoSuccess(res.data))
      console.log(res.data)
    }).catch((err)=>{
      dispatch(todoFailure())
      console.log(err)
    })
  }

  const handleAddTodo=(input)=>{
    const newTodo = {
      title: input,
      status: false,
    };

    dispatch(postRequest())
    axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,newTodo).then((res)=>{
      dispatch(postSuccess(res.data))
    }).catch((err)=>{
      dispatch(postFailure())
    })
  }

  useEffect(()=>{
    getdata()
  },[])

  return (
    <div>
    {/* add TodoInput component here */}
    <TodoInput addToDo={handleAddTodo}/>
    <h1>todos</h1>
    {/* map through the todos array and display the tasks */}
    {todos.map((el) => (
        <div data-testid = "todos-wrapper" key={el.title}>
          {el.title}
          {"---"}
          {el.status ? "Done" : "pending"}
        </div>
      ))}
    </div>
  );
};

export default Todos;
