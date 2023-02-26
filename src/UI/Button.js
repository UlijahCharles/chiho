import React from "react";
import style from "./Button.module.css";

const Button = (props) => {
  const myComponentStyle = {
    width: props.width,
    height: props.height,
    fontSize: props.fontSize,
    display: props.display,
    margin: props.margin,
  };

  return (
    <button
      className={style.button}
      type="button"
      onClick={props.onEnter}
      style={myComponentStyle}
    >
      {props.title}
    </button>
  );
};

export default Button;
