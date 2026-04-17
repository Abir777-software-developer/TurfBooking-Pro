import express from "express";
import cors from "cors";
import { Resend } from "resend";
import { randomBytes } from "crypto";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

// ✅ Token Generator
function generateToken() {
  return randomBytes(8).toString("hex").toUpperCase();
}

// ✅ Main Route
app.post("/api/send-token", async (req, res) => {
  const { bookerName, bookerEmail, receiverEmail, slotDate, slotTime } = req.body;

  // Basic validation
  if (!bookerEmail || !receiverEmail || !slotDate || !slotTime) {
    return res.status(400).json({ success: false, message: "All fields required" });
  }

  try {
    const token = generateToken();

    // Email to Booker
    await resend.emails.send({
      from: "onboarding@resend.dev", // use this until you verify your domain
      to: bookerEmail,
      subject: "✅ Booking Confirmed — Your Token",
      html: `
        <div style="font-family:sans-serif; max-width:500px; margin:auto; padding:20px; border:1px solid #eee; border-radius:10px;">
          <h2 style="color:#4F46E5;">Booking Confirmed!</h2>
          <p>Hi <strong>${bookerName}</strong>, your slot has been booked.</p>
          <div style="background:#F3F4F6; padding:15px; border-radius:8px; text-align:center;">
            <p style="margin:0; font-size:13px; color:#6B7280;">Your Unique Token</p>
            <h1 style="margin:10px 0; color:#4F46E5; letter-spacing:3px;">${token}</h1>
          </div>
          <p>📅 Date: <strong>${slotDate}</strong></p>
          <p>🕐 Time: <strong>${slotTime}</strong></p>
          <p style="color:#9CA3AF; font-size:12px;">Keep this token safe. You may need it for verification.</p>
        </div>
      `,
    });

    // Email to Receiver
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: receiverEmail,
      subject: "📅 New Booking Received",
      html: `
        <div style="font-family:sans-serif; max-width:500px; margin:auto; padding:20px; border:1px solid #eee; border-radius:10px;">
          <h2 style="color:#4F46E5;">New Booking Alert!</h2>
          <p>You have received a new booking from <strong>${bookerName}</strong>.</p>
          <div style="background:#F3F4F6; padding:15px; border-radius:8px; text-align:center;">
            <p style="margin:0; font-size:13px; color:#6B7280;">Booking Token</p>
            <h1 style="margin:10px 0; color:#4F46E5; letter-spacing:3px;">${token}</h1>
          </div>
          <p>📅 Date: <strong>${slotDate}</strong></p>
          <p>🕐 Time: <strong>${slotTime}</strong></p>
        </div>
      `,
    });

    // Return token to frontend too
    res.json({ success: true, token });
  } catch (error) {
    console.error("Resend error:", error);
    res.status(500).json({ success: false, message: "Failed to send emails or generate booking" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
