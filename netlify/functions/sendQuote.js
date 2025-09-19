import fetch from "node-fetch";

export async function handler(event) {
  try {
    const data = JSON.parse(event.body);

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": process.env.BREVO_API_KEY, // stored in Netlify
      },
      body: JSON.stringify({
        sender: { name: data.from_name, email: data.from_email },
        to: [{ name: "Htxcityrentals", email: "Htxcityrentals@gmail.com" }],
        replyTo: { email: data.reply_to },
        subject: `New Quote Request from ${data.customer_name}`,
        htmlContent: `
          <h2>New Quote Request</h2>
          <p><b>Name:</b> ${data.customer_name}</p>
          <p><b>Email:</b> ${data.customer_email}</p>
          <p><b>Phone:</b> ${data.phone}</p>
          <p><b>Event Date:</b> ${data.event_date}</p>
          <p><b>Event Time:</b> ${data.event_time}</p>
          <p><b>Pickup Date:</b> ${data.pickup_date}</p>
          <p><b>Next Day Pickup:</b> ${data.next_day_pickup}</p>
          <p><b>Event Type:</b> ${data.event_type}</p>
          <p><b>Setup Needed:</b> ${data.need_setup}</p>
          <p><b>Building Type:</b> ${data.building_type}</p>
          <p><b>Delivery Address:</b> ${data.delivery_address}</p>
          <p><b>Suite:</b> ${data.suite}</p>
          <h3>Items:</h3>
          <table>${data.items}</table>
          <h3>Total: ${data.total}</h3>
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("Brevo API Error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message }),
    };
  }
}
