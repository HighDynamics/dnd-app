import compression from "compression";
import express, { type ErrorRequestHandler } from "express";
import helmet from "helmet";

import { api } from "./routes";

const PORT = Number(process.env.PORT) || 4002;

const app = express();

// Behind Render's proxy, trust it so secure cookies and req.ip resolve.
if (process.env.NODE_ENV === "production") app.set("trust proxy", 1);

app.use(helmet());
app.use(compression());
app.use(express.json());

// In development Vite proxies /api here, so the browser stays same-origin.
app.use("/api", api);

const handleError: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
};
app.use(handleError);

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
