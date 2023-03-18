import React from "react";
import { decipheringCards } from "../../helpers/deciphering";
import styles from "./Deciphering.module.css";
import DecipheringCard from "./DecipheringCard";

const Deciphering = () => {
  return (
    <>
      <h1 className="title">Weather description in the emoji</h1>
      <div className={styles.cards}>
        {decipheringCards.map((item) => (
          <DecipheringCard key={item.name} item={item} />
        ))}
      </div>
      )
    </>
  );
};

export default Deciphering;
