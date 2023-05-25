import React from "react";
import NoCartFallbackImg from "../utils/assets/no-cart-fallback.jpg";
import { Link } from "react-router-dom";
const NoCartFallback = () => {
  return (
    <div className="flex items-center justify-center w-72 h-72 my-auto mx-auto">
      <div className="flex flex-col justify-between gap-6 items-center">
        <img src={NoCartFallbackImg} alt="no-cart-fallback-img" />
        <div className="flex flex-col items-center">
          <h2 className="text-gray-600 font-bold">Your cart is empty</h2>
          <h3 className="text-xs text-gray-600">
            You can go to home page to view more restaurants
          </h3>
        </div>
        <div>
          <Link to="/">
            <button className="bg-[#fc8019] text-white py-3 px-5 font-medium">
              SEE RESTAURANTS NEAR YOU
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoCartFallback;
