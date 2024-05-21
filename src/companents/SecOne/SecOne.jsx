import React from "react";
import styles from "../SecOne/SecOne.module.scss";
const SecOne = () => {
  return (
    <div className={styles.sectionOne}>
      <div className={styles.containerOne}>
        <div className={styles.left}>
          <h1>Improved Production level with Robotics</h1>
          <p>EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS</p>
          <button>VIEW DETAILS</button>
        </div>
        <div className={styles.right}>
          <img
            src="https://preview.colorlib.com/theme/robotics/img/banner-img.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SecOne;
