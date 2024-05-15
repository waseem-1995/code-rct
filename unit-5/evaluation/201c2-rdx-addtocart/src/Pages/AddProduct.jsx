import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProducts } from "../Redux/action";

const initialState={
    name:"",
    category:"",
    image:"",
    price:0,
    cartQuantity:0,
}

const reducerFunction=(state,action)=>{
    switch(action.type){
        case "name":
            return{...state,name:action.payload}
        case "category":
            return{...state,category:action.payload}
        case "image":
            return{...state,image:action.payload}  
        case "price":
            return{...state,price:action.payload}  
        case "cartQuantity":
            return{...state,cartQuantity:action.payload}            
        default:
            return state;
    }
}

const AddProduct = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate();

    const [productState,setProductState]=useReducer(reducerFunction,initialState)
    const addhandler=()=>{
        if(JSON.stringify(productState)!==JSON.stringify(initialState)){
            dispatch(addProducts(productState)).then(()=>{
                navigate("/")
            })
        }
    }
    return (
        <div>
            <h3>Add Product</h3>
            <div
                className="add-product-wrapper">
                <div className="form-element-div">
                    <label className="form-label">Product title</label>
                    <input type="text"
                    value={productState.name}
                    onChange={(e)=>setProductState({type:"name",payload:e.target.value})}
                    />
                </div>
                <div className="form-element-div">
                    <label className="form-label">Product Category</label>
                    <select data-cy="add-product-category"
                         value={productState.category}
                         onChange={(e)=>setProductState({type:"category",payload:e.target.value})}
                    >
                        <option value="">Select Category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Cosmetics">Cosmetics</option>
                        <option value="Shoes">Shoes</option>
                    </select>
                </div>
                <div className="form-element-div">
                    <label className="form-label">Product Image</label>
                    <input
                        data-cy="add-product-image"
                        type="url"
                        placeholder="Image URL"
                        value={productState.image}
                        onChange={(e)=>setProductState({type:"image",payload:e.target.value})}
                    />
                </div>
                <div className="form-element-div">
                    <label className="form-label">Product Price</label>
                    <input data-cy="add-product-price" type="text" 
                     value={productState.price}
                     onChange={(e)=>setProductState({type:"price",payload:e.target.value})}
                    />
                </div>
                <div style={{ textAlign: "right" }}>
                    <button data-cy="add-product-button" onClick={addhandler}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
