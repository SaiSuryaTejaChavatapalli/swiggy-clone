import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";
const useRestaurantMenu = (resId) => {
  const [restaurants, setRestaurants] = useState(null);

  async function getRestaurantsMenu() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data?.json();
    console.log(json);
    setRestaurants(json?.data?.cards[0]?.card?.card?.info);
  }

  useEffect(() => {
    getRestaurantsMenu();
  }, []);

  return restaurants;
};

export default useRestaurantMenu;
