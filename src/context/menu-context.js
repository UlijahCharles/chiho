import React, { useState, useEffect } from "react";
import useFetch from "../hooks/use-Fetch";

const MenuContext = React.createContext({
  menuData: [],
  setMenuData: () => {},
});

export const MenuContextProvider = (props) => {
  const [data, setData] = useState([]);

  const dummy = useFetch();

  return (
    <MenuContext.Provider value={{ menuData: dummy }}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
