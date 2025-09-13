import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import PersonalInfo from "./PersonalInfo";
import EventDetails from "./EventDetails";
import DeliveryInfo from "./DeliveryInfo";
import CartSummary from "./CartSummary";
import Preview from "./Preview";
import FooterActions from "./FooterActions";
import * as emailService from "./emailService";
import { useCart } from "../../context/CartContext"; 
import { useNavigate } from "react-router";

export default function FormContainer({ isOpen, onClose }) {
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

  // Email validator
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Phone validator
  const isValidPhone = (phone) => {
    const cleaned = phone.replace(/\s+/g, "");
    return /^\+?\d{7,15}$/.test(cleaned);
  };

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
    return cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity * (item.days || 1),
      0
    );
  };

  const formatCurrency = (amount) =>
    `$${Number(amount).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const handlePreview = () => {
    if (!formData.fullName || !formData.email || !formData.phoneNumber) {
      toast.error("Please fill in required fields (Name, Email, Phone)");
      return;
    }
    // if (!cartItems || cartItems.length === 0) {
    //   toast.error("Your cart is empty");
    //   return;
    // }
    // if (!formData.deliveryAddress) {
    //   toast.error("Please enter a delivery address");
    //   return;
    // }
    // if (!formData.eventDate) {
    //   toast.error("Please select an event date");
    //   return;
    // }
    // if (!formData.eventStartTime) {
    //   toast.error("Please select an event start time");
    //   return;
    // }
    // if (!isValidEmail(formData.email)) {
    //   toast.error("Please enter a valid email address");
    //   return;
    // }
    // if (!isValidPhone(formData.phoneNumber)) {
    //   toast.error("Invalid phone number");
    //   return;
    // }

    setShowPreview(true);
  };

  const handleSend = () => {
    setSubmitting(true);

    // Generate HTML for items
    const itemsRows = cartItems
      .map(
        (item) => `
        <tr>
          <td style="border:1px solid #ddd; padding:8px;">${item.name}</td>
          <td style="border:1px solid #ddd; padding:8px; text-align:center;">${item.quantity}</td>
          <td style="border:1px solid #ddd; padding:8px; text-align:center;">${item.days || 1}</td>
          <td style="border:1px solid #ddd; padding:8px; text-align:right;">${formatCurrency(
            item.price * item.quantity * (item.days || 1)
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
      items: itemsRows, // pass HTML here
      total: formatCurrency(calculateTotal()),
    };

    const finalTemplateParams = {
      ...templateParams,
      to_name: "Your Business Name",
      to_email: "forsythokoeguale01@gmail.com",
      from_name: formData.fullName,
      from_email: formData.email,
      reply_to: formData.email,
    };

    emailService
      .sendQuote(finalTemplateParams)
      .then(() => {
        toast.success("Quote sent successfully!");
        clearCart();
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
        toast.error("Failed to send quote: " + (error.text || error.message));
        setSubmitting(false);
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-bold text-orange-500">Request a Quote</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div
          className={`flex-1 overflow-y-auto p-6 sm:grid gap-6 ${
            !showPreview ? "md:grid-cols-4" : "md:grid-cols-3"
          }`}
        >
          {!showPreview && (
            <div className="space-y-3 col-span-2">
              <PersonalInfo formData={formData} onChange={handleInputChange} />
              <EventDetails formData={formData} onChange={handleInputChange} />
              <DeliveryInfo formData={formData} onChange={handleInputChange} />
            </div>
          )}

          <CartSummary
            cartItems={cartItems}
            formatCurrency={formatCurrency}
            calculateTotal={calculateTotal}
            showPreview={showPreview}
          />

          {showPreview && (
            <Preview
              formData={formData}
              cartItems={cartItems}
              formatCurrency={formatCurrency}
              calculateTotal={calculateTotal}
              className="col-span-2"
            />
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t bg-gray-50 flex justify-end gap-3">
          <FooterActions
            showPreview={showPreview}
            formData={formData}
            cartItems={cartItems}
            onPreview={handlePreview}
            onEdit={() => setShowPreview(false)}
            onSend={handleSend}
            submitting={submitting}
          />
        </div>
      </div>
    </div>
  );
}
