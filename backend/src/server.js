import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import projectsRouter from "./routes/projects.js";
import contactRouter from "./routes/contact.js";
import { fetchProfile } from "./services/githubService.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Portfolio backend is running");
});

app.use("/api/projects", projectsRouter);
app.use("/api/contact", contactRouter);

// Profile endpoint
app.get("/api/profile", async (req, res) => {
  try {
    const profile = await fetchProfile();
    res.json(profile);
  } catch (err) {
    console.error("Profile fetch error:", err.message);
    res.status(500).json({ error: "Failed to fetch profile" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
