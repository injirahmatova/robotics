import React from "react";
import styles from "../Header/Header.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";


const Header = () => {

  const navigation=useNavigate('')
  
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src="https://preview.colorlib.com/theme/robotics/img/logo.png"
            alt=""
          />
        </div>
        <div className={styles.nav}>
          <ul>
            <li>
              <a href="" onClick={()=> navigation('/')} >HOME</a>
            </li>
            <li>
              <a href="" onClick={()=> navigation('/Basket')}  >BASKET</a>
            </li>
            <li>
              <a href="" onClick={()=>navigation('/Wishlist')}>WISHLIST</a>
            </li>
            <li>
              <a href="">PRODUCTS</a>
            </li>
            <li>
              <a href="">
                BLOG <IoIosArrowDown />
              </a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
            <li>
              <a href="">
                DROPDOWN <IoIosArrowDown />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.iconMenu}>
        <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
