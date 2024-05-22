import React from "react";
import styles from "../ProductCart/ProductCart.module.scss";


const ProductCart = ({ item, addToBasket, addToWishlist }) => {
  return (
    <div className={styles.card}>
      <img className={styles.img1} src={item.thumbnail} alt="img" />
      <div className={styles.text}>
        <h4>{item.title}</h4>
        <p>{item.price}</p>
        <div className={styles.btns}>
          <button onClick={addToBasket}>Add to cart</button>
          <button onClick={addToWishlist}>Add to wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
