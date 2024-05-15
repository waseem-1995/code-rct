import React,{useEffect,useRef} from 'react'

const Ref = () => {
    const ref=useRef()

    useEffect(()=>{
        ref.current.focus()
    },[])
  return (
    <div><input type="text" ref={ref}/></div>
  )
}

export default Ref