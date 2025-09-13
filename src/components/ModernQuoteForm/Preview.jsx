// File: components/ModernQuoteForm/Preview.jsx
import React from "react";
import { Check } from "lucide-react";
import { useCart } from "../../context/CartContext";

export default function Preview({ formData, formatCurrency }) {
  const { cartItems, getItemTotal, getTotalPrice } = useCart();

  return (
    <div className="p-6 bg-gray-50 rounded-2xl shadow-inner overflow-auto max-h-[70vh] w-full col-span-2">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-800">
        <Check className="w-6 h-6 text-orange-500" /> Quote Preview
      </h3>

      {/* Personal Info */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-700 mb-3 border-b pb-1">
          Personal Info
        </h4>
        <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 text-sm">
          <p>
            <span className="font-medium">Name:</span> {formData.fullName}
          </p>
          <p>
            <span className="font-medium">Email:</span> {formData.email}
          </p>
          <p>
            <span className="font-medium">Phone:</span> {formData.phoneNumber}
          </p>
          <p>
            <span className="font-medium">Company:</span>{" "}
            {formData.companyName || "N/A"}
          </p>
        </div>
      </div>

      {/* Event Details */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-700 mb-3 border-b pb-1">
          Event Details
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 text-sm">
          <p>
            <span className="font-medium">Date:</span>{" "}
            {formData.eventDate || "N/A"}
          </p>
          <p>
            <span className="font-medium">Time:</span>{" "}
            {formData.eventStartTime || "N/A"}
          </p>
          <p>
            <span className="font-medium">Type:</span>{" "}
            {formData.eventType || "N/A"}
          </p>
          <p>
            <span className="font-medium">Pickup Date:</span>{" "}
            {formData.pickupDate || "N/A"}
          </p>
          <p>
            <span className="font-medium">Next Day Pickup:</span>{" "}
            {formData.nextDayPickup || "N/A"}
          </p>
          <p>
            <span className="font-medium">Setup Needed:</span>{" "}
            {formData.needSetup || "N/A"}
          </p>
          <p>
            <span className="font-medium">Building Type:</span>{" "}
            {formData.buildingType || "N/A"}
          </p>
        </div>
      </div>

      {/* Delivery Info */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-700 mb-3 border-b pb-1">
          Delivery Info
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 text-sm">
          <p>
            <span className="font-medium">Address:</span>{" "}
            {formData.deliveryAddress}
          </p>
          <p>
            <span className="font-medium">Suite/Unit:</span>{" "}
            {formData.suite || "N/A"}
          </p>
        </div>
      </div>

      {/* Items */}
      <div>
        <h4 className="text-lg font-semibold text-gray-700 mb-3 border-b pb-1">
          Items
        </h4>
        <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
          <div className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <div
                key={item.cartItemId}
                className="flex justify-between items-center py-3 px-4 hover:bg-gray-50 transition"
              >
                <span className="text-gray-700">
                  {item.name} x {item.quantity} x {item.days}{" "}
                  <span className="text-sm text-gray-500">day(s)</span>
                </span>
                <span className="font-medium text-gray-900">
                  {formatCurrency(getItemTotal(item))}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-4 font-bold text-gray-800 text-lg bg-white p-4 rounded-lg shadow-sm border">
          <span>Total</span>
          <span className="text-orange-600">
            {formatCurrency(getTotalPrice())}
          </span>
        </div>
      </div>
    </div>
  );
}
