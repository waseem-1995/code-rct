import React from "react";
import { useDispatch } from "react-redux";
import { deleteProducts, editProducts } from "../Redux/action";
import "./productcard.css"


const ProductCard = ({ item }) => {
    const dispatch=useDispatch()
    const deletehandler=(id)=>{
        dispatch(deleteProducts(id))
    }

    const handleAddProduct=(id)=>{
        const newCartQuantity=item.cartQuantity+1;
        dispatch(editProducts(id,{cartQuantity:newCartQuantity}))
    }

    const handleRemoveProduct=(id)=>{
        const newCartQuantity=item.cartQuantity-1;
        dispatch(editProducts(id,{cartQuantity:newCartQuantity}))
    }
    return (
        <div data-cy={`product-card-${item.id}`}>
            <div data-cy="product-card-name">{item.name}</div>
            <div data-cy="product-card-category">{item.category}</div>
            <div>
                <img data-cy="product-card-image" src={`${item.image}`} alt="Product" style={{width:"100%"}} />
            </div>
            <div data-cy="product-card-price">€ price{item.price}</div>
            <div>
                <div>
                    {/* Add a onClick handler for delete functionality */}
                    <button data-cy="delete-button" className="danger"
                        onClick={()=>deletehandler(item.id)}
                    >
                        <img src='./delete.png' alt='delete' width='20px' />
                    </button>

                </div>
                <div>
                    <button data-cy='add-to-cart' className="add-to-cart" 
                        onClick={()=>handleAddProduct(item.id)}
                    >
                        +
                    </button>
                    <span data-cy='product-quantity'>{item.cartQuantity}</span>
                    <button data-cy='remove-from-cart' className="remove-from-cart"
                         onClick={()=>handleRemoveProduct(item.id)}
                    >
                        -
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
