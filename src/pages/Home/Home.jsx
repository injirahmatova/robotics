import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../companents/Header/Header";
import ProductCart from "../../companents/ProductCart/ProductCart";
import SecOne from "../../companents/SecOne/SecOne";
import SecTwo from "../../companents/SecTwo/SecTwo";
import styles from "../Home/Home.module.scss";
const Home = () => {

  const [data, setData] = useState([]);
console.log(data);
  const getdata = () => {
    axios.get("https://dummyjson.com/products")
    .then((res) => {
      
      setData(res.data.products);
    
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <Header />
      <SecOne />
      <SecTwo />
      <div className={styles.title}>
        <h1>Featured Robotics Products to Show</h1>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>
      <div className={styles.products}>
        {data && data.map(item => <ProductCart key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Home;
