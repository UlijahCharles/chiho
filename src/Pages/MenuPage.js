import React from "react";
import MainItem from "../Components/MainItem";
import MainNavbar from "../Components/MainNavbar";
import MenuList from "../Components/MenuList";
import Menu from "../Components/Menu";
import style from "./menuPage.module.css";
import img from "../assets/KowloonChicken.jpeg";

const MenuPage = () => {
  return (
    <section className={style.layout}>
      <div className={style.header}>
        <h1 className={style.title}>Menu</h1>
        <MenuList />
        <hr />
      </div>
      <div className={style.main}>
        <MainItem
          imageLink={img}
          dishTitle="Smashed Cucumber"
          dishPrice="390 "
          description=" Suspendisse sollicitudin ipsum urna, sed ullamcorper velit ultrices non. Cras sollicitudin, dolor id vehicula rutrum, odio lacus tincidunt urna, eu viverra nibh est vitae lorem."
        />
      </div>

      <div className={style.footer}>
        <hr />
        <Menu showButton={false} />
      </div>
    </section>
  );
};

export default MenuPage;
