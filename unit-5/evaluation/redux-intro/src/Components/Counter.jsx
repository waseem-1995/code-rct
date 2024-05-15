import React from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { handleAdd,handleReduce } from '../Redux/action';


const Counter = () => {
    const count=useSelector((store)=>store.count);
    const dispatch=useDispatch();

    const addHandler=()=>{
        dispatch(handleAdd(2))
    }

    const reduceHandler=()=>{
        dispatch(handleReduce(2))
    }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={addHandler}>Add</button>
      <button onClick={reduceHandler}>Reduce</button>
    </div>
  )
}

export default Counter
