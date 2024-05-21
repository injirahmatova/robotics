import React from "react";
import styles from "../Header/Header.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
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
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">ABOUT US</a>
            </li>
            <li>
              <a href="">SERVICES</a>
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
