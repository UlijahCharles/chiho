import React from "react";
import Menu from "../Components/Menu";
import chefImage from "../assets/test2.jpg";
import style from "./MainPage.module.css";
import MenuNav from "../Components/MenuNav";
import { useNavigate, useSearchParams } from "react-router-dom";
import useFetch from "../hooks/use-Fetch";
import videoPlay from "../assets/vibe.mp4";

const MainPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const param = searchParams.get("menu");

  if (!param) {
    navigate("?menu=Appetizers");
  }

  const menuData = useFetch();

  return (
    <React.Fragment>
      <h1 className={style.headerTitle}>
        CHIHO
        <br /> IS TRUE CHINA
      </h1>
      {/*<img src={chefImage} className={style.headerImg} alt=""></img>*/}
      <video className={style.headerVid} autoPlay muted loop playsInline>
        <source src={videoPlay} type="video/mp4" />
      </video>

      <h2 className={style.menuTitle}>
        <span>POPULAR DISHES</span>
      </h2>
      <MenuNav />
      <Menu menuArray={menuData} />
    </React.Fragment>
  );
};

export default MainPage;
