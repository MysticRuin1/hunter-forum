import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));

// If you need cross-origin access during local dev, keep this permissive.
// In production (same origin), it's safe to tighten or remove.
app.use(cors({ origin: true, credentials: true }));

// --- Example API routes ---
app.get("/api/health", (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

// Add more routes under /api as needed.
// Example: app.use("/api/users", usersRouter)

// --- Static frontend (Vite build) ---
const clientDist = path.join(__dirname, "client", "dist");
app.use(express.static(clientDist));

// SPA fallback: send index.html for all non-API GET routes
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api")) return next();
  res.sendFile(path.join(clientDist, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Hunternet running on http://localhost:${PORT}`);
});
