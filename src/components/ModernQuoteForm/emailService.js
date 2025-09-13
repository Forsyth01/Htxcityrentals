import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_a5eg6jx";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_ik4bw4c";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "PU3X7cMzJhY_5BJ9P";

export function sendQuote(templateParams, { serviceId = SERVICE_ID, templateId = TEMPLATE_ID, publicKey = PUBLIC_KEY } = {}) {
  return emailjs.send(serviceId, templateId, templateParams, publicKey);
}

export default { sendQuote };
