// File: components/ModernQuoteForm/FooterActions.jsx
import React from "react";

export default function FooterActions({ showPreview, formData, cartItems = [], onPreview, onEdit, onSend, submitting }) {
  const disabled = !formData.fullName || !formData.email || !formData.phoneNumber || !formData.deliveryAddress || !cartItems?.length;

  return (
    <>
      {!showPreview ? (
        <button
          onClick={onPreview}
          className="px-6 py-2 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition duration-200 text-sm disabled:opacity-50"
          disabled={disabled}
        >
          Preview Quote
        </button>
      ) : (
        <>
          <button
            onClick={onEdit}
            className="px-6 py-2 rounded-lg bg-gray-300 text-gray-700 font-medium hover:bg-gray-400 transition duration-200 text-sm"
          >
            Edit
          </button>
          <button
            onClick={onSend}
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
    </>
  );
}
