

import styles from "./RestaurantCard.css"
function RestaurantCard({image,name,number_of_votes,price_starts_from,rating,type}) {
  return (
    <div data-testid="restaurant-card" className={styles.container}>
      <img src={image} alt={name} data-testid="restaurant-card-image" />
      <p data-testid="restaurant-card-name">{name}</p>
      <p data-testid="restaurant-card-votes">{number_of_votes}</p>
      <p data-testid="restaurant-card-price">{price_starts_from}</p>
      <p data-testid="restaurant-card-rating">{rating}</p>
      <p data-testid="restaurant-card-type">{type}</p>
    </div>
  );
}

export default RestaurantCard;
