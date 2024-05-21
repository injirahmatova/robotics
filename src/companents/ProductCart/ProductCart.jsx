import React from "react";
import styles from "../ProductCart/ProductCart.module.scss";
import { CiHeart } from "react-icons/ci";

const ProductCart = ({ item, AddToBasket, sil }) => {
  return (
    <div className={styles.card}>
      <img className={styles.img1} src={item.thumbnail} alt="img" />
      <div className={styles.text}>
        <h4>{item.title}</h4>
        <p>{item.price}</p>
        <div className={styles.btns}>
          <button onClick={AddToBasket}> Add to cart </button>
          <button onClick={sil}><CiHeart /></button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
