import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { useCart } from "../../context/CartContext";
import { sendQuoteMessage, sendCustomerConfirmation } from "../../utils/emailService";
import { useFormValidation } from "../../hooks/useFormValidation";

import ModalHeader from "./ModalHeader";
import FormContent from "./FormContent";
import FooterActions from "./FooterActions";

export default function FormContainer({ isOpen, onClose }) {
  const { cartItems, clearCart } = useCart();
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
    city: "",
    state: "",
    zipCode: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();

  const { validateForm } = useFormValidation(formData);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity * (item.days || 1), 0);

  const formatCurrency = (amount) =>
    `$${Number(amount).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const handlePreview = () => {
    const result = validateForm();
    if (!result.valid) return toast.error(result.error);
    setShowPreview(true);
  };

  const handleSend = async () => {
    const result = validateForm();
    if (!result.valid) return toast.error(result.error);

    setSubmitting(true);

    const itemsRows = cartItems
      .map(
        (item) => `
        <tr>
          <td style="border:1px solid #ddd;padding:8px;">${item.name}</td>
          <td style="border:1px solid #ddd;padding:8px;text-align:center;">${item.quantity}</td>
          <td style="border:1px solid #ddd;padding:8px;text-align:center;">${item.days || 1}</td>
          <td style="border:1px solid #ddd;padding:8px;text-align:right;">${formatCurrency(
            item.price * item.quantity * (item.days || 1)
          )}</td>
        </tr>`
      )
      .join("");

    const businessParams = {
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
      city: formData.city || "N/A",
      state: formData.state || "N/A",
      zip_code: formData.zipCode || "N/A",
      items: itemsRows,
      total: formatCurrency(calculateTotal()),
      to_name: "Htxcityrentals",
      to_email: "Htxcityrentals@gmail.com",
      from_name: formData.fullName,
      from_email: formData.email,
      reply_to: formData.email,
    };

    const customerParams = {
      customer_name: formData.fullName,
      event_date: formData.eventDate || "N/A",
      event_time: formData.eventStartTime || "N/A",
      delivery_address: formData.deliveryAddress,
      city: formData.city || "N/A",
      state: formData.state || "N/A",
      zip_code: formData.zipCode || "N/A",
      items: itemsRows,
      total: formatCurrency(calculateTotal()),
      year: new Date().getFullYear(),
      to_email: formData.email,
      from_name: "Htxcityrentals",
      from_email: "Htxcityrentals@gmail.com",
      reply_to: "Htxcityrentals@gmail.com",
    };

    try {
      await sendQuoteMessage(businessParams);
      sendCustomerConfirmation(customerParams).catch(console.error);

      toast.success("Quote sent! Customer will receive confirmation shortly.");
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
        city: "",
        state: "",
        zipCode: "",
      });
      setShowPreview(false);
      setSubmitting(false);
      onClose();
      navigate("/");
    } catch (error) {
      console.error("FAILED! Error details:", error);
      toast.error("Failed to send quote: " + (error.text || error.message));
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        <ModalHeader title="Request a Quote" onClose={onClose} submitting={submitting} />
        <FormContent
          showPreview={showPreview}
          formData={formData}
          handleInputChange={handleInputChange}
          cartItems={cartItems}
          formatCurrency={formatCurrency}
          calculateTotal={calculateTotal}
        />
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
  );
}
