import logo from "../assets/logo2.png";
import background from "../assets/landing_background.png";
import styles from "./launchNavbar.module.css";

const LaunchNavbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.relative}>
        <img src={logo} alt="Chiho Logo" className={styles.logo} />
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#" className={styles.link}>
            Delivery
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.link}>
            About
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.link}>
            Contacts
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.link}>
            Feedback
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={`${styles.contact} ${styles.link}`}>
            +7 495 208-85-29
          </a>
        </li>
      </ul>
    </nav>
  );
  //Maybe try to put the contact number in a div just like the img logo
};

export default LaunchNavbar;
