import React, { useCallback, useEffect, useState } from "react";
import MainNavbar from "../Components/MainNavbar";
import Menu from "../Components/Menu";
import chefImage from "../assets/test2.jpg";
import style from "./MainPage.module.css";
import MenuList from "../Components/MenuList";

const MainPage = () => {
  const [menuData, setMenuData] = useState([]);

  const fetchMenu = useCallback(async () => {
    try {
      //
      const response = await fetch(
        "https://eco-azimuth-375816-default-rtdb.firebaseio.com/menu.json"
      );
      if (!response.ok) {
        throw new Error(response.status);
      }

      const data = await response.json();
      const menu = [];
      for (const type in data) {
        for (const id in data[type]) {
          menu.push({
            type: type,
            id: id,
            imageUrl: data[type][id].imageUrl,
            price: data[type][id].price,
            title: data[type][id].title,
          });
        }
      }
      setMenuData(menu);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchMenu();
  }, [fetchMenu]);

  return (
    <React.Fragment>
      <h1 className={style.header}>
        CHIHO
        <br /> IS TRUE CHINA
      </h1>
      <img src={chefImage} className={style.headerImg}></img>
      <h2 className={style.menuTitle}>POPULAR DISHES</h2>
      <MenuList />
      <hr></hr>
      <Menu menuArray={menuData} />
    </React.Fragment>
  );
};

export default MainPage;
