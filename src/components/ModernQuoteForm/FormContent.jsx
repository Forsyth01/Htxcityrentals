import PersonalInfo from "./PersonalInfo";
import EventDetails from "./EventDetails";
import DeliveryInfo from "./DeliveryInfo";
import CartSummary from "./CartSummary";
import Preview from "./Preview";

export default function FormContent({
  showPreview,
  formData,
  handleInputChange,
  cartItems,
  formatCurrency,
  calculateTotal
}) {
  return (
    <div className={`flex-1 overflow-y-auto p-6 sm:grid gap-6 ${!showPreview ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
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
  );
}
