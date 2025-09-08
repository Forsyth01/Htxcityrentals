import React, { useState, useEffect } from "react";
import { User, Calendar, MapPin, ShoppingCart, Check, X } from "lucide-react";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router";

export default function ModernQuoteForm({ isOpen, onClose }) {
  const { cartItems, clearCart } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    eventDate: "",
    eventStartTime: "",
    pickupDate: "",
    nextDayPickup: "",
    eventType: "",
    needSetup: "",
    buildingType: "",
    deliveryAddress: "",
    suite: "",
  });

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateTotal = () => {
    if (!cartItems || cartItems.length === 0) return 0;
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const formatCurrency = (amount) => {
    return `$${Number(amount).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const handlePreview = () => {
    if (!formData.fullName || !formData.email || !formData.phoneNumber) {
      toast.error("Please fill in required fields (Name, Email, Phone)");
      return;
    }
    if (!cartItems || cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    if (!formData.deliveryAddress) {
      toast.error("Please enter a delivery address");
      return;
    }
    setShowPreview(true);
  };

  const handleSend = () => {
    setSubmitting(true);

    // Generate HTML table rows for cart items with proper styling
    const itemsText = cartItems
      .map(
        (i) =>
          `<tr style="border: 1px solid #ddd;">
            <td style="border: 1px solid #ddd; padding: 8px;">${i.name}</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${
              i.quantity
            }</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">${formatCurrency(
              i.price * i.quantity
            )}</td>
          </tr>`
      )
      .join("");

    const templateParams = {
      customer_name: formData.fullName,
      customer_email: formData.email,
      company: formData.companyName || "N/A",
      phone: formData.phoneNumber,
      event_date: formData.eventDate || "N/A",
      event_time: formData.eventStartTime || "N/A",
      pickup_date: formData.pickupDate || "N/A",
      next_day_pickup: formData.nextDayPickup || "N/A",
      event_type: formData.eventType || "N/A",
      need_setup: formData.needSetup || "N/A",
      building_type: formData.buildingType || "N/A",
      delivery_address: formData.deliveryAddress,
      suite: formData.suite || "N/A",
      items: itemsText,
      total: formatCurrency(calculateTotal()),
    };

    // Try with explicit recipient in template params
    const finalTemplateParams = {
      ...templateParams,
      to_name: "Your Business Name",
      to_email: "forsythokoeguale01@gmail.com", // REPLACE WITH YOUR BUSINESS EMAIL
      from_name: formData.fullName,
      from_email: formData.email,
      reply_to: formData.email,
    };

    // Debug logging - remove in production
    console.log("Sending template params:", finalTemplateParams);
    console.log("EmailJS Config:", {
      serviceId: "service_pnsl2nc",
      templateId: "template_ataw108",
      publicKey: "ten7Qz80l-3DX3lWG",
    });

    // Try using emailjs.sendForm instead
    emailjs
      .send(
        "service_a5eg6jx", // Service ID
        "template_ik4bw4c", // Template ID
        finalTemplateParams,
        "PU3X7cMzJhY_5BJ9P" // Public Key
      )
      .then((response) => {
        console.log("SUCCESS! Response:", response);
        toast.success("Quote sent successfully!");
        clearCart();

        // Reset form data
        setFormData({
          fullName: "",
          email: "",
          companyName: "",
          phoneNumber: "",
          eventDate: "",
          eventStartTime: "",
          pickupDate: "",
          nextDayPickup: "",
          eventType: "",
          needSetup: "",
          buildingType: "",
          deliveryAddress: "",
          suite: "",
        });
        setShowPreview(false);
        setSubmitting(false);
        onClose();
        navigate("/");
      })
      .catch((error) => {
        console.error("FAILED! Error details:", error);
        console.error("Error status:", error.status);
        console.error("Error text:", error.text);

        let errorMessage = "Failed to send quote";
        if (error.text) {
          errorMessage += `: ${error.text}`;
        } else if (error.message) {
          errorMessage += `: ${error.message}`;
        }

        toast.error(errorMessage);
        setSubmitting(false);
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-bold text-orange-500">Request a Quote</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:grid md:grid-cols-3 gap-6">
          {/* Form */}
          {!showPreview && (
            <div className="space-y-3 col-span-2">
              {/* Personal Info */}
              <h3 className="font-semibold text-gray-700 mb-1 flex items-center gap-2">
                <User className="w-4 h-4" /> Personal Info
              </h3>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name *"
                className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email *"
                className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number *"
                className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Company (optional)"
                className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              {/* Event Details */}
              <h3 className="font-semibold text-gray-700 mt-4 mb-1 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Event Details
              </h3>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="time"
                name="eventStartTime"
                value={formData.eventStartTime}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Pickup Date"
              />
              <select
                name="nextDayPickup"
                value={formData.nextDayPickup}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Next Day Pickup?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <select
                name="needSetup"
                value={formData.needSetup}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Need Setup?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <select
                name="buildingType"
                value={formData.buildingType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Building Type</option>
                <option value="Office">Office</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Hall">Hall</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Other">Other</option>
              </select>

              {/* Delivery Info */}
              <h3 className="font-semibold text-gray-700 mt-4 mb-1 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Delivery Info
              </h3>
              <input
                type="text"
                name="deliveryAddress"
                value={formData.deliveryAddress}
                onChange={handleInputChange}
                placeholder="Delivery Address *"
                className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <input
                type="text"
                name="suite"
                value={formData.suite}
                onChange={handleInputChange}
                placeholder="Suite / Unit (optional)"
                className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}
          {/* Cart Summary */}
          <div className="rounded-xl border p-4 mt-6 sm:mt-0 flex flex-col bg-gray-50 h-fit w-full ">
            <h3 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" /> Cart Summary
            </h3>
            {cartItems?.length > 0 ? (
              <div className="space-y-1 flex-1 overflow-y-auto text-sm">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between border-b py-1"
                  >
                    <span className="text-gray-700">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="font-medium">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
                <div className="font-bold text-right mt-2 pt-2 border-t">
                  Total: {formatCurrency(calculateTotal())}
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-sm">Your cart is empty.</p>
            )}
          </div>
          {/* Preview Section */}
          {showPreview && (
            <div className=" p-6 bg-gray-50 rounded-2xl shadow-inner overflow-auto max-h-[70vh] w-full col-span-2">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-800">
                <Check className="w-6 h-6 text-orange-500" /> Quote Preview
              </h3>

              {/* Personal Info */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3 border-b pb-1">
                  Personal Info
                </h4>
                <div className=" grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 text-sm">
                  <p>
                    <span className="font-medium">Name:</span>{" "}
                    {formData.fullName}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> {formData.email}
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span>{" "}
                    {formData.phoneNumber}
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
                    {cartItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center py-3 px-4 hover:bg-gray-50 transition"
                      >
                        <span className="text-gray-700">
                          {item.name} x {item.quantity}
                        </span>
                        <span className="font-medium text-gray-900">
                          {formatCurrency(item.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between mt-4 font-bold text-gray-800 text-lg bg-white p-4 rounded-lg shadow-sm border">
                  <span>Total</span>
                  <span className="text-orange-600">
                    {formatCurrency(calculateTotal())}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t bg-gray-50 flex justify-end gap-3">
          {!showPreview ? (
            <button
              onClick={handlePreview}
              className="px-6 py-2 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition duration-200 text-sm disabled:opacity-50"
              disabled={
                !formData.fullName ||
                !formData.email ||
                !formData.phoneNumber ||
                !formData.deliveryAddress ||
                !cartItems?.length
              }
            >
              Preview Quote
            </button>
          ) : (
            <>
              <button
                onClick={() => setShowPreview(false)}
                className="px-6 py-2 rounded-lg bg-gray-300 text-gray-700 font-medium hover:bg-gray-400 transition duration-200 text-sm"
              >
                Edit
              </button>
              <button
                onClick={handleSend}
                disabled={submitting}
                className="px-6 py-2 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 disabled:opacity-50 transition duration-200 text-sm flex items-center gap-2"
              >
                {submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  "Confirm & Send Quote"
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
