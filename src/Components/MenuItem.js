import React from "react";
import styles from "./MenuItem.module.css";
import { useNavigate } from "react-router-dom";

/*Add click event on div to bring to Item detail*/

const MenuItem = (props) => {
  const navigate = useNavigate();

  function goToItem() {
    navigate(`/item?menu=${props.menuParam}&id=${props.id}`);
  }

  return (
    /*

    <div className={styles.card} onClick={goToItem}>
      <div className={styles.cardImage}>
        <img src={`${props.imageUrl}`} alt="food" />
      </div>
      <div className={styles.cardText}>
        <p className={styles.cardMealType}>{props.type}</p>
        <h2 className={styles.cardTitle}>{props.title}</h2>
        <p className={styles.cardBody}>{props.id}</p>
      </div>
      <div className={styles.cardPrice}>{`${props.price} ₽`}</div>
    </div>
         */

    <React.Fragment>
      <div class={styles.productCard}>
        <div class={styles.badge}>Hot</div>
        <div class={styles.productTumb}>
          <img src={`${props.imageUrl}`} alt="" onClick={goToItem} />
        </div>
        <div class={styles.productDetails}>
          <span class={styles.productCatagory}>{props.type}</span>
          <h4>
            <p onClick={goToItem}>{props.title}</p>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
            possimus nostrum!
          </p>
          <div class={styles.productBottomDetails}>
            <div class={styles.productPrice}>{`${props.price} ₽`}</div>
            <div class={styles.productLinks}>
              <button className={styles.cartButton}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#B5B5B5">
                  <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </button>
              <button className={styles.favoriteButton}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#B5B5B5">
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MenuItem;
