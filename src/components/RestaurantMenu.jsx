import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux/cartSlice";
import BodyShimmer from "./BodyShimmer";
import VegIcon from "../utils/assets/veg-icon.svg";
import NonVegIcon from "../utils/assets/non-veg-icon.svg";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RestaurantMenu = () => {
  const params = useParams();
  // const [restaurants, setRestaurants] = useState(null);
  const { resId } = params;
  const [restaurantsMenus, restaurantHeadData] = useRestaurantMenu(resId);

  const {
    name: restaurantName,
    areaName: restaurantAreaName,
    cloudinaryImageId: restaurantImageId,
    cuisines,
    avgRatingString,
    totalRatingsString,
    sla,
    costForTwoMessage,
  } = restaurantHeadData || {};
  const slaString = sla?.slaString;
  const lastMileTravel = sla?.lastMileTravel;
  const dispatch = useDispatch();
  const handleAddItem = (menu) => {
    let { name, price, menuItemId, defaultPrice, itemAttribute } = menu;
    dispatch(
      addItem({
        name,
        price,
        defaultPrice,
        quantity: 1,
        menuItemId,
        itemAttribute,
      })
    );
    toast.success("Item Added to Cart Successfully!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
            <span className="text-gray-500 text-sm">{cuisines?.join(",")}</span>
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
        {restaurantsMenus?.map((menu, id) => (
          <div
            className="flex items-center justify-center"
            // key={menu?.menuItemId}
            key={id}
          >
            <div className="flex border border-y-gray-400 border-x-0 m-2  justify-between w-1/2">
              <div className="mt-4">
                {menu?.itemAttribute?.vegClassifier === "VEG" ? (
                  <span className="text-green-600 font-semibold text-xs">
                    <img src={VegIcon} alt="veg-icon" className="w-6 h-6" />
                  </span>
                ) : (
                  <span className="text-red-600 font-semibold text-xs">
                    <img
                      src={NonVegIcon}
                      alt="non-veg-icon"
                      className="w-6 h-6"
                    />
                  </span>
                )}

                <h1 className="font-semibold">{menu?.name}</h1>
                <h2 className="text-sm">
                  ₹{menu?.price || menu?.defaultPrice}
                </h2>
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
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default RestaurantMenu;
