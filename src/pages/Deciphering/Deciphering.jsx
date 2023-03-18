import React from "react";
import { decipheringCards } from "../../helpers/deciphering";
import styles from "./Deciphering.module.css";
import DecipheringCard from "./DecipheringCard";

const Deciphering = () => {
  return (
    <div className={styles.cards}>
      {decipheringCards.map((item) => (
        <DecipheringCard item={item} />
      ))}
    </div>
  );
};

export default Deciphering;
