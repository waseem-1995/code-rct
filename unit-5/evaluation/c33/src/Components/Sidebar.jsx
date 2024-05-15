import styled from "styled-components";
import {useSearchParams} from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";

export const Sidebar = () => {
  const [searchParams,setSearchParams]=useSearchParams()
  const initialState=searchParams.getAll("batch")
  const [batch,setBatch]=useState(initialState||[]);
  const [page,setPage]=useState(1)

  const handleBatch=(e)=>{
    let newBatch=[...batch]
    const value=e.target.value;
    if(newBatch.includes(value)){
      newBatch=newBatch.filter((el)=>el !==value)
    }else{
      newBatch.push(value)
    }

    setBatch(newBatch)
  }

  useEffect(()=>{
    let params={
      batch,
    }
    setSearchParams(params)
  },[batch,page])

  return (
    <DIV>
      <h3>Filter by Batch</h3>
      <div>
        <input data-testid="batch-web101" type="checkbox"  value={"WEB101"} checked={batch.includes("WEB101")} onChange={handleBatch} />
        <label>WEB-101</label>
        <br />
        <br />
        <input data-testid="batch-js201" type="checkbox" value={"JS201"} checked={batch.includes("JS201")} onChange={handleBatch}/>
        <label>JS-201</label>
        <br />
        <br />
        <input data-testid="batch-rct101" type="checkbox" value={"RCT101"} checked={batch.includes("RCT101")} onChange={handleBatch}/>
        <label>RCT101</label>
        <br />
        <br />
        <input data-testid="batch-rct211" type="checkbox" value={"RCT211"} checked={batch.includes("RCT211")} onChange={handleBatch} />
        <label>RCT211</label>
        <br />
        <br />
        <input data-testid="batch-nxm101" type="checkbox" value={"NXM101"} checked={batch.includes("NXM101")} onChange={handleBatch} />
        <label>NXM-101</label>
        <br />
      </div>
      <br />
      <br />
      <br />
      <h3>Paginate</h3>
      <PAGE>
        <button data-testid="page-prev" onClick={()=>setPage(page-1)}>Previous</button>
        <button data-testid="page-next" onClick={()=>setPage(page+1)}>Next</button>
      </PAGE>
    </DIV>
  );
};

const PAGE = styled.div`
  button {
    margin: 20px;
    border: none;
    width: 100px;
    height: 35px;
    margin-bottom: 10px;
  }
`;

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }
`;
