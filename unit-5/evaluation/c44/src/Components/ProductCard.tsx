import React from "react";
import { Products } from "./ProductList";

interface productCradProps{
  data:Products[]
}

export const ProductCard = (props:productCradProps) => {
  return (
    <div className={`product-card`}>
     <img src="" alt="img" className="product-image" />
     <h3 className="product-name"></h3>
     <p className="product-price"></p>
     <p className="product-brand"></p>

    </div>
  );
};
