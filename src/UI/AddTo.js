import React from "react";
import style from "./AddTo.module.css";

const AddToCartButton = (props) => {
  const myComponentStyle = {
    width: props.width,
    height: props.height,
    fontSize: props.fontSize,
    display: props.display,
    margin: props.margin,
  };

  return (
    <button
      className={`${style.button} ${props.type ? style.favoriteButton : ""}`}
    >
      {props.title}
    </button>
  );
};

export default AddToCartButton;
