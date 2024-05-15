import {  useSelector } from "react-redux";
import { CartCard } from "../Components/CartCard";

export const CartPage = () => {

  const cartdata=useSelector((store)=>store.cartReducer.cart)
  console.log(cartdata)
  return <div data-testid="cart-list">{/* Map through cart store  */}
     {cartdata.length>0 && cartdata.map((el)=>{
      return<CartCard key={el.id} {...el}/>
     })}
  </div>;
};
