import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/forecast">
          <img src="img/logo.svg" alt="logo" />
        </Link>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <NavLink
              to="/forecast"
              className={(navData) =>
                navData.isActive ? styles.activeLink : styles.item
              }
            >
              Forecast
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              to="/deciphering"
              className={(navData) =>
                navData.isActive ? styles.activeLink : styles.item
              }
            >
              Icon deciphering
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              to="/recomendation"
              className={(navData) =>
                navData.isActive ? styles.activeLink : styles.item
              }
            >
              Recomendation
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
