import React, { useContext, useEffect, useRef } from "react";
import style from "./menuNav.module.css";
import { NavLink, useSearchParams } from "react-router-dom";
import MenuContext from "../context/menu-context";

const ItemSelect = (props) => {
  const appId = props.menuData.find(
    (element) => element.type === "Appetizers"
  ).id;
  const soupId = props.menuData.find((element) => element.type === "Soups").id;
  const noodleId = props.menuData.find(
    (element) => element.type === "Noodles and Rice"
  ).id;
  const mainId = props.menuData.find(
    (element) => element.type === "Main Courses"
  ).id;
  const dessertId = props.menuData.find(
    (element) => element.type === "Desserts"
  ).id;
  const suppId = props.menuData.find(
    (element) => element.type === "Supplements"
  ).id;
  const bevId = props.menuData.find(
    (element) => element.type === "Beverage"
  ).id;

  return (
    <ul className={style.menuNav}>
      <li className={style.menuItem}>
        <NavLink
          to={`/item?menu=Appetizers&id=${appId}`}
          className={style.menuLink}
        >
          Appetizers
        </NavLink>
      </li>
      <li className={style.menuItem}>
        <NavLink
          to={`/item?menu=Soups&id=${soupId}`}
          className={style.menuLink}
        >
          Soups
        </NavLink>
      </li>
      <li className={style.menuItem}>
        <NavLink
          to={`/item?menu=Noodles and Rice&id=${noodleId}`}
          className={style.menuLink}
        >
          Noodle and Rice
        </NavLink>
      </li>
      <li className={style.menuItem}>
        <NavLink
          to={`/item?menu=Main Courses&id=${mainId}`}
          className={style.menuLink}
        >
          Main Courses
        </NavLink>
      </li>
      <li className={style.menuItem}>
        <NavLink
          to={`/item?menu=Desserts&id=${dessertId}`}
          className={style.menuLink}
        >
          Desserts
        </NavLink>
      </li>
      <li className={style.menuItem}>
        <NavLink
          to={`/item?menu=Supplements&id=${suppId}`}
          className={style.menuLink}
        >
          Supplements
        </NavLink>
      </li>
      <li className={style.menuItem}>
        <NavLink
          to={`/item?menu=Beverage&id=${bevId}`}
          className={style.menuLink}
        >
          Beverage
        </NavLink>
      </li>
    </ul>
  );
};

export default ItemSelect;
