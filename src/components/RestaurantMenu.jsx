import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux/cartSlice";
const RestaurantMenu = () => {
  const params = useParams();
  // const [restaurants, setRestaurants] = useState(null);
  const { resId } = params;
  const restaurants = useRestaurantMenu(resId);
  console.log(restaurants);
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem("Grapes"));
  };

  return !restaurants ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu" data-testid="restaurant-menu">
      <div>
        <img src={IMG_CDN_URL + restaurants?.cloudinaryImageId} />
      </div>
      <h1>Restaurant Details</h1>
      <h2>Name:{restaurants?.name}</h2>
      <h3>Restaurant id:{restaurants?.id}</h3>

      <h3>Area:{restaurants?.areaName}</h3>
      <h3>City:{restaurants?.city}</h3>
      <h3>Rating:{restaurants?.avgRating} stars</h3>
      <button
        className="bg-green-800 p-2 m-2 rounded-md"
        onClick={() => handleAddItem()}
        data-testid="addItem"
      >
        Add Item
      </button>
    </div>
  );
};

export default RestaurantMenu;
