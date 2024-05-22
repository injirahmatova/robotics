import React from 'react'
import styles from './ProductCart.module.scss'

const CardBasket = ({item,sil}) => {
  return (
    <>
          <div className={styles.card}>
      <img className={styles.img1} src={item.thumbnail} alt="img" />
      <div className={styles.text}>
        <h4>{item.title}</h4>
        <p>{item.price}</p>
        
          <button style={{padding:10,backgroundColor:'blueviolet',color:'white'}} onClick={sil}>Delete</button>
          
        
      </div>
    </div>
    </>
  )
}

export default CardBasket
