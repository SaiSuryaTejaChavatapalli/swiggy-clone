import React, { useState } from "react";

const PaymentField = () => {
  const [selectedPayment, setSelectedPayment] = useState("");
  return (
    <div>
      <div className="font-bold text-gray-600 text-2xl">Payment</div>
      <div className="m-4 w-full">
        <button
          type="button"
          className={`cursor-pointer border border-gray-400 rounded-lg p-2 m-2 hover:bg-orange-400 hover:text-white w-1/2 ${
            selectedPayment === "upi" ? "bg-green-700 text-white" : null
          }`}
          onClick={() => setSelectedPayment("upi")}
        >
          UPI
        </button>
        <button
          className={`cursor-pointer border border-gray-400 rounded-lg p-2 m-2 hover:bg-orange-400 hover:text-white w-1/2 ${
            selectedPayment === "net-banking" ? "bg-green-700 text-white" : null
          }`}
          onClick={() => setSelectedPayment("net-banking")}
        >
          Net Banking
        </button>
        <button
          className={`cursor-pointer border border-gray-400 rounded-lg p-2 m-2 hover:bg-orange-400 hover:text-white w-1/2 ${
            selectedPayment === "debit-card" ? "bg-green-700 text-white" : null
          }`}
          onClick={() => setSelectedPayment("debit-card")}
        >
          Debit Card
        </button>
        <button
          className={`cursor-pointer border border-gray-400 rounded-lg p-2 m-2 hover:bg-orange-400 hover:text-white w-1/2 ${
            selectedPayment === "credit-card" ? "bg-green-700 text-white" : null
          }`}
          onClick={() => setSelectedPayment("credit-card")}
        >
          Credit Card
        </button>
      </div>
    </div>
  );
};

export default PaymentField;
