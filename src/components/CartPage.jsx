import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import couponImg from "../utils/assets/coupon.svg";
const CartPage = () => {
  const form = useForm();
  const [addressData, setAddressData] = useState({});
  const { street, area, pincode, phone } = addressData;
  const { register, handleSubmit } = form;

  const itemsList = useSelector((store) => store.cart.items);

  const [itemTotal, setItemTotal] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [gstAndRestaurantFee, setGstAndRestaurantFee] = useState(0);
  const [toPay, setToPay] = useState(0);
  const [disableCoupon, setDisableCoupon] = useState(false);
  useEffect(() => {
    itemsList.map((item) => {
      setItemTotal((prevTotal) => prevTotal + item.price);
      setDeliveryPrice((prevDeliveryPrice) => prevDeliveryPrice + 10);
      setGstAndRestaurantFee(
        (prevGstAndRestaurantFee) => prevGstAndRestaurantFee + 3
      );
    });
  }, []);

  const onSubmitDeliveryAddress = (data) => {
    setAddressData(data);
  };
  useEffect(() => {
    setToPay(itemTotal + gstAndRestaurantFee + deliveryPrice);
  }, [deliveryPrice, gstAndRestaurantFee, itemTotal]);
  return (
    <div className="flex p-5 w-full gap-4 bg-gray-100">
      <div className="border border-black w-1/2 p-5 rounded-lg bg-white">
        <form
          onSubmit={handleSubmit(onSubmitDeliveryAddress)}
          className="flex flex-col"
        >
          <h1 className="font-bold text-gray-600 text-2xl">Address:</h1>
          <div className="flex justify-between mt-2">
            <label htmlFor="street">Street:</label>
            <input
              className="border border-black p-1 rounded-sm"
              id="street"
              type="text"
              {...register("street")}
              placeholder="Street"
            />
          </div>
          <div className="flex justify-between mt-2">
            <label htmlFor="area">Area:</label>
            <input
              className="border border-black p-1 rounded-sm"
              id="area"
              type="text"
              {...register("area")}
              placeholder="Area"
            />
          </div>
          <div className="flex justify-between mt-2">
            <label htmlFor="pincode">Pincode</label>
            <input
              className="border border-black p-1 rounded-sm"
              id="pincode"
              type="number"
              {...register("pincode")}
              placeholder="Pincode"
            ></input>
          </div>
          <div className="flex justify-between mt-2">
            <label htmlFor="phone">Phone Number</label>
            <input
              className="border border-black p-1 rounded-sm"
              id="phone"
              type="number"
              {...register("phone")}
              placeholder="Phone number"
            ></input>
          </div>
          <button className="self-center rounded-xl bg-orange-400 text-white p-2 m-2">
            Add Address
          </button>
        </form>
        {Object.keys(addressData).length > 0 && (
          <div className="border border-gray-400 p-2 shadow-sm rounded-md w-2/3">
            <p>Street: {street}</p>
            <p>Area: {area}</p>
            <p>Pincode: {pincode}</p>
            <p>PhoneNumber: {phone}</p>
          </div>
        )}

        <div className="font-bold text-gray-600 text-2xl">Payment</div>
        <div className="m-4">
          <button
            type="button"
            className="cursor-pointer border border-gray-400 rounded-lg p-2 m-2 hover:bg-orange-400 hover:text-white"
          >
            UPI
          </button>
          <button className="cursor-pointer border border-gray-400 rounded-lg p-2 m-2 hover:bg-orange-400 hover:text-white">
            Net Banking
          </button>
          <button className="cursor-pointer border border-gray-400 rounded-lg p-2 m-2 hover:bg-orange-400 hover:text-white">
            Debit Card
          </button>
          <button className="cursor-pointer border border-gray-400 rounded-lg p-2 m-2 hover:bg-orange-400 hover:text-white">
            Credit Card
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2 ">
        <div className="border border-black bg-white h-full flex flex-col items-start p-5 rounded-lg">
          <div className="flex flex-col justify-between w-full">
            <h1 className="font-bold text-gray-600">Items:</h1>
            {itemsList.map((item) => {
              return (
                <div className="flex justify-between">
                  <span className="w-52 text-sm">{item.name}</span>
                  <span> {item.quantity}</span>
                  <span> {item.price}₹</span>
                </div>
              );
            })}
          </div>
          <div
            onClick={() => {
              setToPay((prevToPay) => prevToPay - 30);
              setDisableCoupon(true);
              alert("Hurray!!,30₹ coupon applied!");
            }}
            className="flex border items-center justify-center border-black border-dashed p-2 m-2 cursor-pointer"
          >
            <img src={couponImg} alt="coupon" className="w-5 h-5 mr-2" />
            <p>Apply Coupon 30₹</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-600">Bill Details</h4>
            <div className="flex justify-between">
              <span>Item Total</span>
              <span>{itemTotal}₹</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>{deliveryPrice}₹</span>
            </div>
            <div className="flex justify-between">
              <span>GST and Restaurant Charges</span>
              <span>{gstAndRestaurantFee}₹</span>
            </div>
            <br />
            <div className="flex justify-between">
              <span className="font-bold text-gray-600">TO PAY</span>
              <span>{toPay}₹</span>
            </div>
            <div>
              <div className="break-words text-xs text-gray-500">
                Review your order and address details to avoid cancellations
                <br />
                Note: If you cancel within 60 seconds of placing your order, a
                100% refund will be issued. No refund for cancellations made
                after 60 seconds. Avoid cancellation as it leads to food
                wastage.
                <div className="underline">Read cancellation policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
