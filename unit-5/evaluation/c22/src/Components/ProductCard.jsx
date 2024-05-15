import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartReducer/action";

export const ProductCard = ({title,brand,price,discountPercentage,images,id,thumbnail}) => {
  const dispatch=useDispatch();
  const addToCarthandler=()=>{
    dispatch(addToCart(id))
  }
  return (
    <div className="product-card" key={id}>
      {/* - Every product card will have a `add to cart` button with class `add-to-cart`
       - Show image in image tag with class `product-image` 
       - Show title with class `product-title` 
       - Show brand in p tag with class `product-brand` 
       - Show price in p tag with class `product-price` 
       - Show discount in p tag with class `product-discount` 
       * Do not add any extra text, only response values should be present * 
       * For example `Title:"iPhone"` or `Discount: 10.5%` will not work * */}


       <img width={"200px"} src={images[0]} class="product-image" alt=""/>
      <h3  className= "product-title" >{title}</h3>
      <p  className= "product-brand">{brand}</p>
      <p  className= "product-price" >{price}</p>
      <p className= "product-discount" >{discountPercentage}</p>
      <button className="add-to-cart" onClick={addToCarthandler}>add to cart</button>


    </div>
  );
};
