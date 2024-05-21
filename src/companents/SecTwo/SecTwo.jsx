import React from "react";
import styles from "../SecTwo/SecTwo.module.scss";

const SecTwo = () => {
  return (
    <div className={styles.sectionTwo}>
      <div className={styles.containerTwo}>
        <div className={styles.top}>
          <h1>Featured Robotics Products to Show</h1>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className={styles.bottom}>
      
            <div className={styles.card}>
                <div className={styles.photo}>
                    <img src="https://preview.colorlib.com/theme/robotics/img/p1.png" alt="" />
                </div>
                <h4>The Upper Eye</h4>
                <p>Who are in extremely love with eco friendly system.</p>
                <button>VIEW DETAILS</button>
            </div>
            <div className={styles.card}>
                <div className={styles.photo}>
                    <img src="https://preview.colorlib.com/theme/robotics/img/p4.png" alt="" />
                </div>
                <h4>The Crab Wheel</h4>
                <p>Who are in extremely love with eco friendly system.</p>
                <button>VIEW DETAILS</button>
            </div>
            <div className={styles.card}>
                <div className={styles.photo}>
                    <img src="https://preview.colorlib.com/theme/robotics/img/p2.png" alt="" />
                </div>
                <h4>The Plug Ninja</h4>
                <p>Who are in extremely love with eco friendly system.</p>
                <button>VIEW DETAILS</button>
            </div>
            <div className={styles.card}>
                <div className={styles.photo}>
                    <img src="https://preview.colorlib.com/theme/robotics/img/p3.png" alt="" />
                </div>
                <h4>The Controller</h4>
                <p>Who are in extremely love with eco friendly system.</p>
                <button>VIEW DETAILS</button>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default SecTwo;
