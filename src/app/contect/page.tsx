import React from "react";
import styles from "./Contect.module.css"; // Custom CSS module

function Contect() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>Contact Us</h2>
          <div className={styles.info}>
            <p>
              WhatsApp Number: <span className={styles.bold}>+923101026509</span>
            </p>
            <p>
              Email Address: <span className={styles.bold}>arinrimshakanwal@gmail.com</span>
            </p>
            <p>
              Address: <span className={styles.bold}>Karachi, Pakistan</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contect;
