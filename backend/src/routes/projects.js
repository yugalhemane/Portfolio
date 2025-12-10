import { Router } from "express";
import { fetchProjects } from "../services/githubService.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const projects = await fetchProjects();
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

export default router;
