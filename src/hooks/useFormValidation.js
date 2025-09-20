export const useFormValidation = (formData) => {
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^\+?\d{7,15}$/.test(phone.replace(/\s+/g, ""));

  const validateForm = () => {
    if (!formData.fullName || !formData.email || !formData.phoneNumber) {
      return { valid: false, error: "Please fill in required fields (Name, Email, Phone)" };
    }
    if (!isValidEmail(formData.email)) return { valid: false, error: "Invalid email format" };
    if (!isValidPhone(formData.phoneNumber)) return { valid: false, error: "Invalid phone number format" };
    
    const eventDate = new Date(formData.eventDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (eventDate < today) return { valid: false, error: "Event date cannot be in the past" };

    return { valid: true };
  };

  return { validateForm };
};
