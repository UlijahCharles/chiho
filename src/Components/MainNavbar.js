import React from "react";
import styles from "./mainNavbar.module.css";
import cartIcon from "../assets/shopping_bag_icon8.png";
import { Link } from "react-router-dom";

const LaunchNavbar = () => {
  const cartAmount = 0;

  return (
    <React.Fragment>
      <nav>
        <h1 className={styles.title}>CHIHO</h1>
        <ul className={styles.navbar}>
          <li className={styles.navItem}>
            <Link to={"/menu"} className={styles.link}>
              Menu
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.noEntry}`}>
            <Link to={"#"} className={styles.link}>
              Stocks
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.noEntry}`}>
            <Link to={"#"} className={styles.link}>
              Delivery
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to={"/about"} className={styles.link}>
              About Us
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.noEntry}`}>
            <Link to={"#"} className={styles.link}>
              How To Get
            </Link>
          </li>
        </ul>
        <button href="#">
          <img src={cartIcon} className={styles.cartIcon} />
          <sup>({cartAmount})</sup>
        </button>
      </nav>
      <hr></hr>
    </React.Fragment>
  );
};

export default LaunchNavbar;
