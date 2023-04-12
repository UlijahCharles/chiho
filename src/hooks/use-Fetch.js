import React, { useCallback, useEffect, useState } from "react";

const useFetch = () => {
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

  return menuData;
};

export default useFetch;
