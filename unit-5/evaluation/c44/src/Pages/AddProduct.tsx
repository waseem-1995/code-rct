import React, { useState } from "react";
import { addProduct } from "../api";
import { Navbar } from "../Components/Navbar";
import { Products } from "../Components/ProductList";

export const AddProduct = () => {
  const [products,setProducts]=useState<Products>({
    name: "",
    brand: "",
    price: 0,
    image: "",
    like: 0,
    dislike: 0,
  });

  const handleOnchange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const name=e.target.name;
    const value=e.target.value;
    setProducts((values)=>({...values,[name]:value}))
  }

  const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const res=await addProduct(products)
    console.log(res)
  }
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="name" className="product-name" value={products.name} onChange={handleOnchange}/>
          <input type="text" name="image" placeholder="img" className="product-image" value={products.image} onChange={handleOnchange}/>
          <input type="text" name="brand" placeholder="brand" className="product-brand" value={products.brand} onChange={handleOnchange}/>
          <input type="number" name="price" placeholder="price" className="product-price" value={products.price} onChange={handleOnchange}/>
         <button type="submit" className="submit-form">Add Products</button>
      </form>
    </div>
  );
};

