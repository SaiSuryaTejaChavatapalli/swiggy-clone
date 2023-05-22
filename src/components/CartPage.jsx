import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/redux/cartSlice";
import { useForm } from "react-hook-form";
import couponImg from "../utils/assets/coupon.svg";
import "react-toastify/dist/ReactToastify.css";
import CustomizedAccordions from "../utils/CustomizedAccordian";
import AddressField from "./AddressField";
import PaymentField from "./PaymentField";
import VegIcon from "../utils/assets/veg-icon.svg";
import NonVegIcon from "../utils/assets/non-veg-icon.svg";
const CartPage = () => {
  const dispatch = useDispatch();
  const itemsList = useSelector((store) => store.cart.items);
  const itemTotal = itemsList.reduce((acc, curr) => {
    return acc + (curr.price || curr.defaultPrice) * curr.quantity;
  }, 0);
  const quantityTotal = itemsList.reduce((acc, curr) => acc + curr.quantity, 0);
  const deliveryPrice = quantityTotal * 5;
  const gstAndRestaurantCharges = quantityTotal * 3;
  const toPay = itemTotal + deliveryPrice + gstAndRestaurantCharges;
  return (
    <>
      <div className="flex p-5 w-full gap-4 bg-gray-100">
        <div className="border border-black w-1/3 p-5 rounded-lg bg-white">
          <CustomizedAccordions
            addressField={<AddressField />}
            paymentField={<PaymentField />}
          ></CustomizedAccordions>
        </div>
        <div className="flex items-center justify-center w-2/3 ">
          <div className="border border-black bg-white h-full flex flex-col items-start p-5 rounded-lg">
            <div className="flex flex-col justify-between w-full">
              <h1 className="font-bold text-gray-600">Items:</h1>
              {itemsList.map((item, index) => {
                console.log({ item });
                return (
                  <div
                    className="flex justify-between  items-center m-1 "
                    key={index}
                  >
                    <div className="w-52 text-sm flex items-center gap-2">
                      {item?.itemAttribute?.vegClassifier === "VEG" ? (
                        <img src={VegIcon} alt="veg-icon" className="w-4" />
                      ) : (
                        <img
                          src={NonVegIcon}
                          alt="non-veg-icon"
                          className="w-4"
                        />
                      )}
                      <span>{item.name}</span>
                    </div>
                    <div className="border border-gray-600">
                      <button
                        className=" p-1 "
                        onClick={() => dispatch(removeItem(item))}
                      >
                        -
                      </button>
                      <span className=" text-green-700 font-bold">
                        {" "}
                        {item.quantity}
                      </span>
                      <button
                        className="p-1 text-green-700 font-bold"
                        onClick={() => dispatch(addItem(item))}
                      >
                        +
                      </button>
                    </div>

                    <span>
                      {item.quantity} x ₹{item.price || item.defaultPrice}
                    </span>
                    <span>
                      ₹{(item.price || item.defaultPrice) * item.quantity}
                    </span>
                  </div>
                );
              })}
            </div>
            {/* <div
            onClick={() => {
              alert("Hurray!!,30₹ coupon applied!");
            }}
            className="flex border items-center justify-center border-black border-dashed p-2 m-2 cursor-pointer"
          >
            <img src={couponImg} alt="coupon" className="w-5 h-5 mr-2" />
            <p>Apply Coupon 30₹</p>
          </div> */}
            <div>
              <h4 className="font-bold text-gray-600">Bill Details</h4>
              <div className="flex justify-between">
                <span>Item Total</span>
                <span>₹{itemTotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₹{deliveryPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>GST and Restaurant Charges</span>
                <span>₹{gstAndRestaurantCharges}</span>
              </div>
              <br />
              <hr className="border border-gray-500 " />
              <div className="flex justify-between">
                <span className="font-bold text-gray-600">TO PAY</span>
                <span className="font-bold text-xl">₹{toPay}</span>
              </div>
              <div>
                <div className="break-words text-xs text-gray-500">
                  Review your order and address details to avoid cancellations
                  <br />
                  Note: If you cancel within 60 seconds of placing your order, a
                  100% refund will be issued. No refund for cancellations made
                  after 60 seconds. Avoid cancellation as it leads to food
                  wastage.
                  <div className="underline cursor-pointer">
                    Read cancellation policy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
