import axios, {AxiosResponse} from "axios";
import { Todo } from "./Todo";

export const getTodos=async ()=>{
    let response:AxiosResponse <Todo[]> = await axios.get(
        "http://localhost:8080/todos"
    );
    return response.data;
}

export const addTodo=async (payload:Todo)=>{
    let response:AxiosResponse <Todo> = await axios.post(
        "http://localhost:8080/todos",
        payload
    );
    return response.data;
}