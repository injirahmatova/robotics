import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardBasket from '../../companents/ProductCart/CardBasket'
import styles from './Basket.module.scss'
import Header from '../../companents/Header/Header'

const Basket = () => {
 const [data, setData]=useState([])

 const getData=()=>{
    axios.get('https://664d9087ede9a2b55653ebb7.mockapi.io/basket/basket')
    .then(res=>{
        setData(res.data)
    })
 }
 useEffect(()=>{
    getData()
 },[])

const deleteItem=(id)=>{
    axios.delete( `https://664d9087ede9a2b55653ebb7.mockapi.io/basket/basket/${id}`)
    setTimeout(()=>{
        getData()
    }, 1000)
}
  return (
    <div>
    <Header/>
    <div className={styles.title} >
            <h1>BASKET</h1>
         </div>
        <div className={styles.products}>
            {
                data && data.map(item=> <CardBasket key={item} item={item} sil={()=>deleteItem(item.id)}/>)
                
            }
        </div>
      
    </div>
  )
}

export default Basket
