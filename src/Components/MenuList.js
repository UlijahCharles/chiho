import style from "./menuList.module.css";
import { NavLink } from "react-router-dom";

const MenuList = () => {
  return (
    <ul className={style.menuNav}>
      <li className={style.menuItem}>
        <NavLink
          to="?menu=Appetizers"
          className={({ isActive }) =>
            isActive ? `${style.menuActive} ${style.menuLink}` : style.menuLink
          }
          end
        >
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

export default MenuList;
