import { Router } from "express";

const router = Router();

// In-memory storage for messages
const messages = [];

router.post("/", (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Name, email and message are required." });
  }

  // Store the message
  const newMessage = {
    id: Date.now(),
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  };
  messages.push(newMessage);

  console.log("📩 New contact message:", newMessage);

  return res.json({ success: true, message: "Message received" });
});

// New endpoint to retrieve messages
router.get("/", (req, res) => {
  // Add authentication here later
  res.json(messages);
});

export default router;
