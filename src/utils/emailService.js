import emailjs from "@emailjs/browser";

// Contact form keys
const CONTACT_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const CONTACT_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Quote/Cart form keys
const QUOTE_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID_2;
const QUOTE_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_2;
const QUOTE_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY_2;

// Customer confirmation keys
const CONFIRM_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID_CONFIRM;
const CONFIRM_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONFIRM;
const CONFIRM_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY_CONFIRM;

// Send a contact form message
export function sendContactMessage(templateParams) {
  return emailjs.send(CONTACT_SERVICE_ID, CONTACT_TEMPLATE_ID, templateParams, CONTACT_PUBLIC_KEY);
}

// Send a quote/cart message to business
export function sendQuoteMessage(templateParams) {
  return emailjs.send(QUOTE_SERVICE_ID, QUOTE_TEMPLATE_ID, templateParams, QUOTE_PUBLIC_KEY);
}

// Send confirmation email to customer
export function sendCustomerConfirmation(templateParams) {
  return emailjs.send(CONFIRM_SERVICE_ID, CONFIRM_TEMPLATE_ID, templateParams, CONFIRM_PUBLIC_KEY);
}

export default { sendContactMessage, sendQuoteMessage, sendCustomerConfirmation };
