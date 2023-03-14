import React from "react";
import styles from "./CurrentWeather.module.css";

const CurrentWeather = ({ data }) => {
  const numsRound = (num) => {
    return num > Math.trunc(num) ? num.toFixed(1) : num;
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.mainInfo}>
          <h3>{data.name}</h3>
          <span>{data.weather[0].description}</span>
        </div>
        <img src={`img/icons/${data.weather[0].icon}.png`} alt="weather-icon" />
      </div>
      <div className={styles.body}>
        <h2 className={styles.deg}>{Math.round(data.main.temp)}°C</h2>
        <div className={styles.details}>
          <div className={styles.title}>Details</div>
          <div className={styles.info}>
            <div className={styles.item}>
              <div>Feels like</div>
              <span>{Math.round(data.main.feels_like)}°C</span>
            </div>
            <div className={styles.item}>
              <div>Wind</div>
              <span>{numsRound(data.wind.speed)} m/s</span>
            </div>
            <div className={styles.item}>
              <div>Humidity</div>
              <span>{data.main.humidity}%</span>
            </div>
            <div className={styles.item}>
              <div>Pressure</div>
              <span>{data.main.pressure} hPa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
