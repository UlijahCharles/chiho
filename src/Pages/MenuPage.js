import React, { createContext, useContext, useEffect } from "react";
import Menu from "../Components/Menu";
import MenuContext from "../context/menu-context";

const MenuPage = () => {
  const ctx = useContext(MenuContext);

  const menuData = ctx.menuData;
  const duptype = [];

  menuData.forEach((element) => duptype.push(element.type));

  let type = [...new Set(duptype)];

  const menuArray = type.map((el, index) => (
    <React.Fragment key={index}>
      <h2>
        <span>{el}</span>
      </h2>
      <Menu menuArray={menuData} param={el} />
    </React.Fragment>
  ));

  return menuArray;
};

export default MenuPage;
