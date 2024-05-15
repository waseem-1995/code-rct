import { ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, TOGGLE_TODO_FAILURE, TOGGLE_TODO_REQUEST, TOGGLE_TODO_SUCCESS } from "./Action.type"

export  const reducer=(state,{type,payload})=>{
switch(type){
    case GET_TODO_REQUEST:{
        return{
            ...state,
            isLoading:true,
            isError:false
        }
    }
    case GET_TODO_SUCCESS:{
        return{
            ...state,Todos:payload,
            isLoading:false,
            isError:false
        }
    }
    case GET_TODO_FAILURE:{
        return{ ...state,
            isLoading:false,
            isError:true
        }
    }

    case ADD_TODO_REQUEST:{
        return{
            ...state,
            isLoading:true,
            isError:false
        }
    }
    case ADD_TODO_SUCCESS:{
        let newTodo=[...state.Todos,payload]
        return{
            ...state,
            Todos:newTodo,
            isLoading:false,
            isError:false
        }
    }
    case ADD_TODO_FAILURE:{
        return{ ...state,
            isLoading:false,
            isError:true
        }
    }
    case TOGGLE_TODO_REQUEST:{
        return{
            ...state,
            isLoading:true,
            isError:false
        }
    }
    case TOGGLE_TODO_SUCCESS:{
        let newToggleTodo=state.Todos.map((item)=>item.id===payload.id ? payload : item)
        return{
            ...state,
            Todos:newToggleTodo,
            isLoading:false,
            isError:false
        }
    }
    case TOGGLE_TODO_FAILURE:{
        return{ ...state,
            isLoading:false,
            isError:true
        }
    }
    default:{
        return {...state}
    }
}
}