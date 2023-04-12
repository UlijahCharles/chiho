import React, { Suspense } from "react";
import MainItem from "../Components/MainItem";
import Menu from "../Components/Menu";
import style from "./itemPage.module.css";
import useFetch from "../hooks/use-Fetch";
import { useSearchParams } from "react-router-dom";
import ItemSelect from "../Components/ItemSelect";
import MenuNav from "../Components/MenuNav";

const MenuPage = (props) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const idParam = searchParams.get("id");

  const data = useFetch();
  if (idParam === null) {
    console.log(data);

    setSearchParams({
      id: "20c0b43aefe34f3b9039334bfe3d2713", //GET FIRST ITEM IN ARRAY of MENU SELECTED
    });
  }

  const menuData = data.filter((items) => {
    return items.id === idParam;
  });
  if (data.length === 0) return <p>.........Loading</p>;
  else
    return (
      <section className={style.layout}>
        <div className={style.header}>
          {<ItemSelect menuData={data} />}
          {/*<MenuNav />*/}
        </div>

        <div className={style.main}>
          <MainItem
            imageLink={menuData[0].imageUrl}
            dishTitle={menuData[0].title}
            dishPrice={menuData[0].price}
            description=" Suspendisse sollicitudin ipsum urna, sed ullamcorper velit ultrices non. Cras sollicitudin, dolor id vehicula rutrum, odio lacus tincidunt urna, eu viverra nibh est vitae lorem."
          />
        </div>

        <div className={style.footer}>
          <hr />
          {<Menu menuArray={data} />}
        </div>
      </section>
    );
};

export default MenuPage;
