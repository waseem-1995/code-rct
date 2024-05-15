import { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const products=useSelector((store)=>{
    console.log(store.productReducer.products)
    return store.productReducer.products 
  })
  // const {isLoading }= useSelector((state) => state.products.isLoading);
  // const {isError} = useSelector((state) => state.products.isError);
    
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getProducts())
  },[])

  return (
  <>
    <div data-testid="product-list"  
      style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}> 
      {/* Map through products with ProductCard component  */}
      {  
        products?.map((ele)=>(
            <ProductCard {...ele} key={ele.id} />
        ))
      }
    </div>
  </>
  );
};
