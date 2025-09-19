export async function sendQuoteMessage(templateParams) {
  const response = await fetch("/.netlify/functions/sendQuote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(templateParams),
  });

  if (!response.ok) {
    throw new Error("Failed to send email");
  }

  return response.json();
}
