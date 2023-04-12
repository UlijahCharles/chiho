import React from "react";
import styles from "./mainNavbar.module.css";
import cartIcon from "../assets/shopping_bag_icon8.png";
import { Link } from "react-router-dom";

const LaunchNavbar = () => {
  const cartAmount = 0;

  return (
    <React.Fragment>
      <nav>
        <Link to={"/home"} className={styles.title}>
          CHIHO
        </Link>
        <ul className={styles.navbar}>
          <li className={styles.navItem}>
            <Link to={"/menu"} className={styles.link}>
              Menu
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.noEntry}`}>
            <Link
              to={"#"}
              className={styles.link}
              onClick={(e) => e.preventDefault()}
            >
              Stocks
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.noEntry}`}>
            <Link
              to={"#"}
              className={styles.link}
              onClick={(e) => e.preventDefault()}
            >
              Delivery
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to={"/about"} className={styles.link}>
              About Us
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.noEntry}`}>
            <Link
              to={"#"}
              className={styles.link}
              onClick={(e) => e.preventDefault()}
            >
              How To Get
            </Link>
          </li>
        </ul>
        <button href="#" className={styles.cartButton}>
          <img src={cartIcon} className={styles.cartIcon} />
          <sup>({cartAmount})</sup>
        </button>
      </nav>
      <hr></hr>
    </React.Fragment>
  );
};

export default LaunchNavbar;
