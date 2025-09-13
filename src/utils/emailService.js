import emailjs from "@emailjs/browser";

// Contact form keys
const CONTACT_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const CONTACT_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Quote/Cart form keys
const QUOTE_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID_2;
const QUOTE_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_2;
const QUOTE_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY_2;

// Send a contact form message
export function sendContactMessage(templateParams) {
  return emailjs.send(CONTACT_SERVICE_ID, CONTACT_TEMPLATE_ID, templateParams, CONTACT_PUBLIC_KEY);
}

// Send a quote/cart message
export function sendQuoteMessage(templateParams) {
  return emailjs.send(QUOTE_SERVICE_ID, QUOTE_TEMPLATE_ID, templateParams, QUOTE_PUBLIC_KEY);
}

export default { sendContactMessage, sendQuoteMessage };
