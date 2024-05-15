import React, { useEffect } from "react";
import Filter from "../Components/Filter";
import { useDispatch , useSelector } from "react-redux";
import { getShoesData } from "../Redux/AppReducer/action";
import ShoeCard from "../Components/ShoeCard";
import "../App.css";
import {useSearchParams} from "react-router-dom";
import { useLocation } from "react-router-dom";

const Shoes = () => {
  const dispatch = useDispatch();
  const location = useLocation()
  const [searchParams] = useSearchParams();
  const shoes = useSelector((state)=> state.shoe.shoes);
  useEffect(()=> {
    const cate = searchParams.getAll("category");
    // console.log(cate)
    if(cate.length===0){
      dispatch(getShoesData(dispatch));
    }
    else if(shoes.length===0 || location.search){
      const getBookjs = {
        params : {
          category :  cate,
        }
      }
    dispatch(getShoesData(getBookjs));
  }
  },[dispatch,location.search,searchParams]);
  return (
    <div>
      <Filter />
      <div className="shoes-main-div">
        {/* Map through the shoes list here using ShoeCard Component */}
        {
          shoes.map((item)=> {
            return <ShoeCard item={item} key={item.name}/>
          })
        }
      </div>
    </div>
  );
};

export default Shoes;
