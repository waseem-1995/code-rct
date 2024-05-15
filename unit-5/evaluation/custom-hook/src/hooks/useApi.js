import React, { useState, useEffect } from "react";

const useApi = (apiFn) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [err, setErr] = useState("")
    const [data, setData] = useState([]);

    const execute=async () =>{
        try {
            setLoading(true)
            let data=await apiFn()
            setData(data)
            setSuccess(true)
        } catch (e) {
            setErr(e.message)
            setSuccess(false)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        execute()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return {loading,err,success,data,setData,execute}
  
}

export default useApi
