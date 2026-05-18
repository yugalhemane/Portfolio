import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Name, email and message are required." });
  }

  console.log("New contact message:", {
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  });

  return res.json({ success: true, message: "Message received" });
});

export default router;
