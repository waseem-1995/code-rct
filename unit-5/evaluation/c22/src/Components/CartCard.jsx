import React from 'react'

export const CartCard = ({thumbnail,title,brand,price,discountPercentage}) => {
  return (
    <div className='Product-card'>
     <img width={"200px"} src={thumbnail} class="product-image" alt=""/>
      <h3  className= "product-title" >{title}</h3>
      <p  className= "product-brand">{brand}</p>
      <p  className= "product-price" >{price}</p>
      <p className= "product-discount" >{discountPercentage}</p>
    </div>
  )
}
