import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Name, email and message are required." });
  }

  // For now: just log it on the server
  console.log("📩 New contact message:", { name, email, message });

  // Later you can hook this into nodemailer or a service like Resend
  return res.json({ success: true });
});

export default router;
