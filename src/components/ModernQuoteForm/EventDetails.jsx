// File: components/ModernQuoteForm/EventDetails.jsx
import React from "react";
import { Calendar } from "lucide-react";

export default function EventDetails({ formData, onChange }) {
  return (
    <>
      <h3 className="font-semibold text-gray-700 mt-4 mb-1 flex items-center gap-2">
        <Calendar className="w-4 h-4" /> Event Details
      </h3>

      <input
        type="date"
        name="eventDate"
        value={formData.eventDate}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <input
        type="time"
        name="eventStartTime"
        value={formData.eventStartTime}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <select
        name="eventType"
        value={formData.eventType}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Select Event Type</option>
        <option value="Wedding">Wedding</option>
        <option value="Birthday">Birthday</option>
        <option value="Corporate">Corporate</option>
        <option value="Conference">Conference</option>
        <option value="Other">Other</option>
      </select>
      <input
        type="date"
        name="pickupDate"
        value={formData.pickupDate}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Pickup Date"
      />
      <select
        name="nextDayPickup"
        value={formData.nextDayPickup}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Next Day Pickup?</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <select
        name="needSetup"
        value={formData.needSetup}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Need Setup?</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <select
        name="buildingType"
        value={formData.buildingType}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Select Building Type</option>
        <option value="Office">Office</option>
        <option value="Restaurant">Restaurant</option>
        <option value="Hall">Hall</option>
        <option value="Outdoor">Outdoor</option>
        <option value="Other">Other</option>
      </select>
    </>
  );
}