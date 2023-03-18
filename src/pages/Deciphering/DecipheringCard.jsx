import React from "react";
import styles from "./Deciphering.module.css";

const DecipheringCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <img src={item.emoji} alt={item.name} />
      <div className={styles.info}>
        <div className={styles.title}>
          <h3>{item.name}</h3>
          <img src={item.icon} alt={item.name} />
        </div>
        <p className={styles.description}>{item.description}</p>
      </div>
    </div>
  );
};

export default DecipheringCard;
