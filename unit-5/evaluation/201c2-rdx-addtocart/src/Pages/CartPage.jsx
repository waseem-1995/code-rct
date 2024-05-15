import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard';
import { getProducts } from '../Redux/action';

const CartPage = () => {
    const products=useSelector((store)=>store.products);
    const dispatch=useDispatch();
    const cartItems= products.filter(item => item.cartQuantity)

    useEffect(()=>{
        if(products.length===0){
            dispatch(getProducts())
        }
    },[dispatch,products])

    return (
        <div>
            <div style={{width:"100%"}}>Cart Page</div>
            <div
                className="cart-product-cards"
                style={{display:"flex", gap:"10px", gridTemplateColumns:"repeat(auto-fit,minmax(300px,3fr))",width:"400px"}}
                
            >
                {/* filter out the cart items from the product list (products that has some cartQuantity) and show them here, by rendering it in the ProductCard component */}
                {cartItems.length > 0 && cartItems.map((item)=>{
                    return <ProductCard key={item.id} item={item} />
                })}

            </div>
        </div>
    )
}

export default CartPage