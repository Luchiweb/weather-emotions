import React from "react";
import styles from "./CurrentWeather.module.css";
import sunny from "../../img/icons/01d.png";

const CurrentWeather = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.mainInfo}>
          <h3>London</h3>
          <span>sunny</span>
        </div>
        <img src={sunny} alt="weather-icon" />
      </div>
      <div className={styles.body}>
        <h2 className={styles.deg}>15°C</h2>
        <div className={styles.details}>
          <div className={styles.title}>Details</div>
          <div className={styles.info}>
            <div className={styles.item}>
              <div>Feels like</div>
              <span>11°C</span>
            </div>
            <div className={styles.item}>
              <div>Wind</div>
              <span>4 m/s</span>
            </div>
            <div className={styles.item}>
              <div>Humidity</div>
              <span>15%</span>
            </div>
            <div className={styles.item}>
              <div>Pressure</div>
              <span>10 hPa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
