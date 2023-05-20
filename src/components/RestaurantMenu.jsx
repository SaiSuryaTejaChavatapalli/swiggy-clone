import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux/cartSlice";
import BodyShimmer from "./BodyShimmer";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";
const RestaurantMenu = () => {
  const params = useParams();
  // const [restaurants, setRestaurants] = useState(null);
  const { resId } = params;
  const [restaurantsMenus, restaurantHeadData] = useRestaurantMenu(resId);
  console.log("Initial", restaurantsMenus);
  const {
    name: restaurantName,
    areaName: restaurantAreaName,
    cloudinaryImageId: restaurantImageId,
    cuisines,
    avgRatingString,
    totalRatingsString,
    sla,
    costForTwoMessage,
  } = restaurantHeadData;
  const slaString = sla?.slaString;
  const lastMileTravel = sla?.lastMileTravel;
  const dispatch = useDispatch();
  const handleAddItem = (menu) => {
    let { name, price } = menu;
    if (price) {
      price = price / 100;
    } else {
      price = 300;
    }
    dispatch(
      addItem({
        name,
        price,
        quantity: 1,
        lastMileTravel,
      })
    );
  };
  // return <RestaurantMenuShimmer />;
  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <div className="flex w-1/2 justify-between">
          <div className="">
            <h1 className="font-bold text-2xl text-gray-700">
              {restaurantName}
            </h1>
            <span className="text-gray-500 text-sm">{cuisines?.join(" ")}</span>
            <div>
              <span className="text-gray-500 text-sm">
                {restaurantAreaName},{" "}
              </span>
              <span className="text-gray-500 text-sm">8.6 km</span>
            </div>
            <div>
              <span className="font-bold mr-2 text-gray-600">{slaString}</span>
              <span className="font-bold text-gray-600">
                {costForTwoMessage}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center border border-gray-300 p-1 rounded-lg h-16">
            <span>★{avgRatingString}</span>
            <hr />
            <span>{totalRatingsString}</span>
          </div>
        </div>
      </div>

      <div>
        {restaurantsMenus?.map((menu) => (
          <div
            className="flex items-center justify-center"
            key={menu?.menuItemId}
          >
            <div className="flex border border-y-gray-400 border-x-0 m-2  justify-between w-1/2">
              <div className="mt-4">
                {menu?.itemAttribute?.vegClassifier === "VEG" ? (
                  <span className="text-green-600 font-semibold text-xs">
                    Veg
                  </span>
                ) : (
                  <span className="text-red-600 font-semibold text-xs">
                    Non Veg
                  </span>
                )}

                <h1 className="font-semibold">{menu?.name}</h1>
                <h2 className="text-sm">₹{menu?.price / 100 || "220"}</h2>
                <h3 className="text-gray-400 text-xs mt-4">
                  {menu.description}
                </h3>
              </div>
              <div className="p-2 flex flex-col">
                <img
                  src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${menu?.imageId}`}
                  alt="menu-item"
                  className="w-24 rounded-lg"
                />
                <button
                  onClick={() => handleAddItem(menu)}
                  className="rounded-lg border border-gray-300 p-1 m-1 w-24 text-green-700 font-semibold"
                >
                  ADD +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
