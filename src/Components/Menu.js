import React from "react";
import MenuItem from "./MenuItem";
import Button from "../UI/Button";
import styles from "./Menu.module.css";
import { useSearchParams } from "react-router-dom";
const Menu = (props) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const param = searchParams.get("menu");
  return (
    <React.Fragment>
      <section className={styles.layout}>
        {props.menuArray
          .filter((items) => {
            return items.type === param;
          })
          .map((data) => {
            return (
              <MenuItem
                title={data.title}
                price={data.price}
                type={data.type}
                imageUrl={data.imageUrl}
                key={data.id}
              />
            );
          })}
        {props.showButton && (
          <Button title="VIEW MENU" width="20%" height="80px" fontSize="28px" />
        )}
      </section>
    </React.Fragment>
  );
};

export default Menu;
