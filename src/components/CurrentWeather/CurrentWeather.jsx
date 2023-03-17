import React from "react";
import Details from "../Details/Details";
import styles from "./CurrentWeather.module.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.mainInfo}>
          <h3>{data.name}</h3>
          <span>{data.weather[0].description}</span>
        </div>
        <img src={`img/icons/${data.weather[0].icon}.svg`} alt="weather-icon" />
      </div>
      <div className={styles.body}>
        <h2 className={styles.deg}>{Math.round(data.main.temp)}°C</h2>
        <div className={styles.details}>
          <div className={styles.title}>Details</div>
          <Details data={data} />
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
