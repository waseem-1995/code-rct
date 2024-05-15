import React, { useEffect, useState } from "react";
import { getProducts } from "../api";
import { ProductCard } from "./ProductCard";

export interface Products{
  name: string,
  brand: string,
  price: number,
  image: string,
  like: number,
  dislike: number,
}

const ProductList = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(()=>{
    getProducts().then((res)=>{
      console.log(res)
      setProducts(res)
    })
  },[])

  return (
    <div className={`product-list`}>
      {/* Add all product cards here in grid format  */}
      {products.map((product, id) => {
        return <ProductCard key={id} {...product} />;
      })}
      
    </div>
  );
};

export default ProductList;
