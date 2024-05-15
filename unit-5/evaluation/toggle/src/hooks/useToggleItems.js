import {useState} from "react"
const useToggleItems = (initialvalue,initialposition=0) => {
    const [pos,setPos]=useState(initialposition)
    const [state,setState]=useState(initialvalue[pos])
    const toggleState=()=>{
        const newState=(pos+1)%initialvalue.length
        setPos(newState)
        setState(initialvalue[newState])
    }
    return[state,toggleState]
};

export { useToggleItems };
