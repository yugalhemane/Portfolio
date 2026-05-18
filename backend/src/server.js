import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import projectsRouter from "./routes/projects.js";
import contactRouter from "./routes/contact.js";
import { fetchProfile } from "./services/githubService.js";

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://portfolio-xi-swart-31.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      if (origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }

      console.warn("Blocked by CORS:", origin);
      return callback(null, false);
    },
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Portfolio backend is running");
});

app.use("/api/projects", projectsRouter);
app.use("/api/contact", contactRouter);

app.get("/api/profile", async (req, res) => {
  try {
    const profile = await fetchProfile();
    res.json(profile);
  } catch (err) {
    console.error("Profile fetch error:", err.message);
    res.status(500).json({ error: "Failed to fetch profile" });
  }
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", uptime: process.uptime() });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
