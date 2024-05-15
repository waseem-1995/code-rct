import React, { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom";
import { useDispatch } from "react-redux";
import { getShoesData } from "../Redux/AppReducer/action";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  const [category,setCategory] = useState([]);
  const dispatch = useDispatch()
  const [searchParams,setSearchParams] = useSearchParams()
  const handlecategory = (e)=> {
    const {value} = e.target;
    const newCategory = [...category];
    if(category.includes(value)){
      newCategory.splice(newCategory.indexOf(value),1);
    }
    else{
      newCategory.push(value);
    }
    setCategory(newCategory);
  }
  useEffect(()=> {
    if(category){
      setSearchParams({category : category});
      // dispatch(getShoesData(searchParams));
    }
  },[category,setSearchParams])
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input onChange={handlecategory} type="checkbox" value="Sneakers" />
          <label>Sneakers</label>
        </div>
        <div>
          <input onChange={handlecategory} type="checkbox" value="Loafers" />
          <label>Loafers</label>
        </div>
        <div>
          <input onChange={handlecategory} type="checkbox" value="Canvas" />
          <label>Canvas</label>
        </div>
        <div>
          <input onChange={handlecategory} type="checkbox" value="Boots" />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
