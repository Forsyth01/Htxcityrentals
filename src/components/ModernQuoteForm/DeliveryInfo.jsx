// File: components/ModernQuoteForm/DeliveryInfo.jsx
import React from "react";
import { MapPin } from "lucide-react";

export default function DeliveryInfo({ formData, onChange }) {
  return (
    <>
      <h3 className="font-semibold text-gray-700 mt-4 mb-1 flex items-center gap-2">
        <MapPin className="w-4 h-4" /> Delivery Info
      </h3>
      <input
        type="text"
        name="deliveryAddress"
        value={formData.deliveryAddress}
        onChange={onChange}
        placeholder="Delivery Address *"
        className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <input
        type="text"
        name="suite"
        value={formData.suite}
        onChange={onChange}
        placeholder="Suite / Unit (optional)"
        className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </>
  );
}