import React from "react";
import {Link} from "react-router-dom";

const ShoeCard = ({item}) => {
  let shoeId = item.id;
  return (
    <Link style={{"textDecoration" : "none","textAlign": "center"}} to={`/shoes/${shoeId}`} data-cy={`shoe-card-wrapper-${shoeId}`}>
      <div style={{"display" : "block"}}>
        <img style={{"width": "100%"}} data-cy="shoe-card-image" src={item.image} alt={item.name} />
      </div>
      <div>
        <div data-cy="shoe-name">{item.name}</div>
        <div data-cy="shoe-category">{item.category}</div>
      </div>
    </Link>
  );
};

export default ShoeCard;
