import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
const AddressField = () => {
  const onSubmitDeliveryAddress = (data) => {
    setAddressData(data);
    toast.success("Address Added Successfully!!", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const [addressData, setAddressData] = useState({});
  const { street, area, pincode, phone } = addressData;
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmitDeliveryAddress)}
        className="flex flex-col"
      >
        <h1 className="font-bold text-gray-600 text-2xl">Address:</h1>
        <div className="flex justify-between mt-2">
          <label htmlFor="street">Street:</label>
          <div>
            <input
              className="border border-black p-1 rounded-sm"
              id="street"
              type="text"
              {...register("street", {
                required: "Street is required*",
              })}
              placeholder="Street"
            />
            <p className="text-red-600 text-xs">{errors?.street?.message}</p>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <label htmlFor="area">Area:</label>
          <div>
            <input
              className="border border-black p-1 rounded-sm"
              id="area"
              type="text"
              {...register("area", {
                required: "Area is required*",
              })}
              placeholder="Area"
            />
            <p className="text-red-600 text-xs">{errors?.area?.message}</p>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <label htmlFor="pincode">Pincode:</label>
          <div>
            <input
              className="border border-black p-1 rounded-sm"
              id="pincode"
              type="number"
              {...register("pincode", {
                required: "Pincode is required*",
                minLength: {
                  value: 6,
                  message: "Pincode Should be six digits",
                },
                maxLength: {
                  value: 6,
                  message: "Pincode Should be six digits only",
                },
              })}
              placeholder="Pincode"
            ></input>
            <p className="text-red-600 text-xs break-words">
              {errors?.pincode?.message}
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <label htmlFor="phone">Phone No:</label>
          <div>
            <input
              className="border border-black p-1 rounded-sm"
              id="phone"
              type="number"
              {...register("phone", {
                required: "PhoneNumber is required*",
                minLength: {
                  value: 10,
                  message: "PhoneNumber should be 10 numbers",
                },
                maxLength: {
                  value: 10,
                  message: "Phone number should be 10 numbers only",
                },
              })}
              placeholder="Phone number"
            ></input>
            <p className="text-red-600 text-xs break-words">
              {errors?.phone?.message}
            </p>
          </div>
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
      <div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddressField;
