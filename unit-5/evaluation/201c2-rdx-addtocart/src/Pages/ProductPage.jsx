import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../Components/ProductCard';
import { getProducts } from '../Redux/action';
import './productpage.css'


const ProductPage = () => {
    const dispatch=useDispatch();
    const productsdata=useSelector((store)=>store).products;
   console.log(productsdata)
    useEffect(()=>{
        dispatch(getProducts())
    },[])
    return (
        <div style={{ width: "100%" }}>
            <div className='product-cards'>
                {/* Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
                */}
                {productsdata.length>0 && 
                    productsdata.map((item)=>{
                        return<ProductCard key={item.id} item={item}/>
                    })
                }
            </div>
        </div>
    );
}

export default ProductPage