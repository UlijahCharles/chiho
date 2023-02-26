import React from "react";
import Button from "../UI/Button";
import style from "./mainItem.module.css";

const MainItem = (props) => {
  return (
    <React.Fragment>
      <div className={style.imageDiv}>
        <img className={style.itemImage} src={`${props.imageLink}`} alt="" />
      </div>
      <div className={style.descriptionDiv}>
        <h2 className={style.descriptionTitle}>{props.dishTitle}</h2>
        <p className={style.descriptionPrice}>{props.dishPrice} ₽</p>
        <p className={style.description}>{props.description}</p>
        <Button
          title="ADD TO CARD"
          className={style.button}
          display="inline-block"
          margin="5% 5% 5% 0%"
          width="450px"
        />
        <Button title="♡" display="inline-block" />
      </div>
    </React.Fragment>
  );
};

export default MainItem;
