import React from "react";
import MenuItem from "./MenuItem";
import styles from "./Menu.module.css";
import { useSearchParams } from "react-router-dom";
import AddToCartButton from "../UI/AddTo";
const Menu = (props) => {
  let [searchParams, setSearchParams] = useSearchParams();
  let param = searchParams.get("menu");

  return (
    <React.Fragment>
      <section className={styles.layout}>
        {props.menuArray
          .filter((items) => {
            if (props.param) param = props.param;
            return items.type === param;
          })
          .map((data) => {
            return (
              <MenuItem
                title={data.title}
                price={data.price}
                type={data.type}
                imageUrl={data.imageUrl}
                description={data.description}
                key={data.id}
                id={data.id}
                menuParam={param}
              />
            );
          })}
        {props.showButton && <AddToCartButton title="Add To Cart" />}
      </section>
    </React.Fragment>
  );
};

export default Menu;
