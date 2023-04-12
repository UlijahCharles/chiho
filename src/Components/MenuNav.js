import style from "./menuNav.module.css";
import { NavLink } from "react-router-dom";

const MenuNav = () => {
  return (
    <ul className={style.menuNav}>
      <li className={style.menuItem}>
        <NavLink to={"?menu=Appetizers"} className={style.menuLink}>
          Appetizers
        </NavLink>
      </li>
      <li className={style.menuItem}>
        <NavLink to={"?menu=Soups"} className={style.menuLink}>
          Soups
        </NavLink>
      </li>
      <li className={style.menuItem}>
        <NavLink to={"?menu=Noodles and Rice"} className={style.menuLink}>
          Noodle and Rice
        </NavLink>
      </li>
      <li className={style.menuItem}>
        <NavLink to={"?menu=Main Courses"} className={style.menuLink}>
          Main Courses
        </NavLink>
      </li>
      <li className={style.menuItem}>
        <NavLink to={"?menu=Desserts"} className={style.menuLink}>
          Desserts
        </NavLink>
      </li>
      <li className={style.menuItem}>
        <NavLink to={"?menu=Supplements"} className={style.menuLink}>
          Supplements
        </NavLink>
      </li>
      <li className={style.menuItem}>
        <NavLink to={"?menu=Beverage"} className={style.menuLink}>
          Beverage
        </NavLink>
      </li>
    </ul>
  );
};

export default MenuNav;
