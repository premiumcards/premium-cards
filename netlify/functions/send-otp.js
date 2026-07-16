import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { email } = JSON.parse(event.body || "{}");

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Email required" }),
      };
    }

    const otp = generateOTP();

    // TODO:
    // Firestore में email, otp और expiry (Date.now()+5*60*1000) सेव करें।
    // यह अगले स्टेप में verify-otp.js के साथ जोड़ा जाएगा।

    await resend.emails.send({
      from: "Premium Cards Shop <onboarding@resend.dev>",
      to: email,
      subject: "Your Premium Cards Shop OTP",
      html: `
        <div style="font-family:Arial,sans-serif">
          <h2>Premium Cards Shop</h2>
          <p>Your verification code is:</p>
          <h1 style="letter-spacing:8px">${otp}</h1>
          <p>This code expires in <b>5 minutes</b>.</p>
          <p>If you didn't request this, ignore this email.</p>
        </div>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "OTP sent successfully",
      }),
    };
  } catch (err) {
    console.error(err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: err.message,
      }),
    };
  }
}
