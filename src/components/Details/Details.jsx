import React from "react";
import styles from "./Details.module.css";

const Details = ({ data, place }) => {
  const numsRound = (num) => {
    return num > Math.trunc(num) ? num.toFixed(1) : num;
  };

  return (
    <div className={place ? styles.info : ""}>
      <div
        className={
          place ? `${styles.forecastItem} ${styles.item}` : styles.item
        }
      >
        <div>Feels like</div>
        <span>{Math.round(data.main.feels_like)}°C</span>
      </div>
      <div
        className={
          place ? `${styles.forecastItem} ${styles.item}` : styles.item
        }
      >
        <div>Wind</div>
        <span>{numsRound(data.wind.speed)} m/s</span>
      </div>
      <div
        className={
          place ? `${styles.forecastItem} ${styles.item}` : styles.item
        }
      >
        <div>Humidity</div>
        <span>{data.main.humidity}%</span>
      </div>
      <div
        className={
          place ? `${styles.forecastItem} ${styles.item}` : styles.item
        }
      >
        <div>Pressure</div>
        <span>{data.main.pressure} hPa</span>
      </div>
    </div>
  );
};

export default Details;
