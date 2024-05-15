import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const SingleShoe = () => {
  const {id} = useParams();
  const [data,setData] = useState({});
  useEffect(()=> {
    axios.get(`http://localhost:8080/shoes/${id}`)
    .then((res)=> setData(res.data))
    .catch((error)=> console.error(error));
  },[])
  return (
    <div>
      <h2>{data.name}</h2>
      <div>
        <img src={data.image} alt="Cover Pic" />
      </div>
      <div>
        <div>{data.category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
