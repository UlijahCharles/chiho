import React from "react";
import testImg from "../assets/KowloonChicken.jpeg";
import styles from "./MenuItem.module.css";

/*Add click event on div to bring to Item detail*/

const MenuItem = (props) => {
  return (
    /*
    <React.Fragment>
      <div className={styles.itemContainer}>
        <img src={testImg} className={styles.itemImg} alt="" />
        <p className={styles.itemTitle}>
          {props.title}
          <span className={styles.itemPrice}>${props.price}</span>
        </p>
      </div>
    </React.Fragment>*/
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={`${props.imageUrl}`} alt="food" />
      </div>
      <div className={styles.cardText}>
        <p className={styles.cardMealType}>{props.type}</p>
        <h2 className={styles.cardTitle}>{props.title}</h2>
        <p className={styles.cardBody}>description</p>
      </div>
      <div className={styles.cardPrice}>{`${props.price} ₽`}</div>
    </div>
  );
};

export default MenuItem;
