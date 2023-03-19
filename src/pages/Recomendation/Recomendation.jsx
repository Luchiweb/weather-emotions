import React from "react";
import styles from "./Recomendation.module.css";
// import circle from "../../img/ellipse.svg";
// import arrow from "../../img/arrow.svg";

const Recomendation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.question}>
        <h1>What is meteosensitivity?</h1>
        <p>
          Meteosensitivity is the human body's response to changes in weather
          conditions. It often occurs in unfamiliar conditions, but a
          significant number of people experience meteosensitivity all the time,
          regardless of the climate.
        </p>
      </div>
      <div className={styles.question}>
        <h2>How do you deal with it?</h2>
        <p>
          We have prepared some useful tips for you to improve your well-being
          &#128522;
        </p>
      </div>

      <div className={styles.recomendations}>
        <div className={styles.recomendationWrapper}>
          <div className={styles.number}>
            <img src={"../../../public/img/ellipse.svg"} alt="ellipse" />
            <span>1</span>
          </div>
          <div className={styles.recomendation}>
            <b>Keep a weather diary:</b> keep track of how you feel on different
            weather days to identify which weather conditions trigger your
            symptoms. This can help you plan ahead and adjust your activities
            accordingly.
          </div>
        </div>
        <div className={styles.recomendationWrapper}>
          <img
            className={styles.arrow}
            src={"../../../public/img/arrow.svg"}
            alt="arrow"
          />
          <div className={styles.number}>
            <img src={"../../../public/img/ellipse.svg"} alt="ellipse" />
            <span>2</span>
          </div>
          <div className={styles.recomendation}>
            <b>Stay informed:</b> keep up-to-date with the latest weather
            forecast and warnings from your local authorities. This will help
            you prepare for any weather changes that might affect your health.
          </div>
        </div>
        <div
          className={`${styles.recomendationWrapper} ${styles.recomendationWrapperRevert}`}
        >
          <div className={styles.recomendation}>
            <b>Create a comfortable environment:</b> adjust your home or work
            environment to make it comfortable for you. For example, use air
            conditioning or fans to control the temperature, and use humidifiers
            or dehumidifiers to adjust the humidity level.
          </div>
          <div className={styles.number}>
            <img src={"../../../public/img/ellipse.svg"} alt="ellipse" />
            <span>3</span>
          </div>
          <img
            className={styles.arrowRight}
            src={"../../../public/img/arrow.svg"}
            alt="arrow"
          />
        </div>
        <div className={styles.recomendationWrapper}>
          <img
            className={styles.arrow}
            src={"../../../public/img/arrow.svg"}
            alt="arrow"
          />
          <div className={styles.number}>
            <img src={"../../../public/img/ellipse.svg"} alt="ellipse" />
            <span>4</span>
          </div>
          <div className={styles.recomendation}>
            <b>Manage your stress levels:</b> stress can exacerbate your
            meteosensitivity symptoms, so try to manage your stress levels
            through relaxation techniques such as meditation, yoga, or deep
            breathing exercises.
          </div>
        </div>
        <div
          className={`${styles.recomendationWrapper} ${styles.recomendationWrapperRevert}`}
        >
          <div className={styles.recomendation}>
            <b>Take appropriate medication:</b>
            if your meteosensitivity symptoms are severe, talk to your doctor
            about medication options that may help manage your symptoms.
          </div>
          <div className={styles.number}>
            <img src={"../../../public/img/ellipse.svg"} alt="ellipse" />
            <span>5</span>
          </div>
          <img
            className={styles.arrowRight}
            src={"../../../public/img/arrow.svg"}
            alt="arrow"
          />
        </div>
        <div className={styles.recomendationWrapper}>
          <img
            className={styles.arrow}
            src="../../../public/img/arrow.svg"
            alt="arrow"
          />
          <div className={styles.number}>
            <img src={"../../../public/img/ellipse.svg"} alt="ellipse" />
            <span>6</span>
          </div>
          <div className={styles.recomendation}>
            <b>Stay hydrated:</b> drink plenty of water during hot weather to
            prevent dehydration, which can worsen your symptoms.
          </div>
        </div>
        <div
          className={`${styles.recomendationWrapper} ${styles.recomendationWrapperRevert}`}
        >
          <div className={styles.recomendation}>
            <b>Avoid triggers:</b> try to avoid activities or environments that
            trigger your symptoms. For example, if you are sensitive to pollen,
            avoid spending time outside during high pollen count days.
          </div>
          <div className={styles.number}>
            <img src={"../../../public/img/ellipse.svg"} alt="ellipse" />
            <span>7</span>
          </div>
          <img
            className={styles.arrowRight}
            src={"../../../public/img/arrow.svg"}
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Recomendation;
