import React from "react";
import AddTo from "../UI/AddTo";
import style from "./mainItem.module.css";

const MainItem = (props) => {
  return (
    <React.Fragment>
      <div className={style.imageDiv}>
        <img className={style.itemImage} src={`${props.imageLink}`} alt="" />
      </div>
      <div className={style.descriptionDiv}>
        <h1 className={style.descriptionTitle}>{props.dishTitle}</h1>
        <p className={style.descriptionPrice}>{props.dishPrice} ₽</p>
        <p className={style.description}>{props.description}</p>
        <div className={style.buttonDiv}>
          <AddTo title="Add To Cart" />
          <AddTo title="♥" type={true} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainItem;
